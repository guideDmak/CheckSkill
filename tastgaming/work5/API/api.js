// ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้ทั้งหมดจาก API
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            displayUsers(data); // แสดงข้อมูลผู้ใช้ในตาราง
        })
        .catch(error => {
            console.error("ดึงข้อมูลไม่สำเร็จ:", error);
        });
}

function displayUsers(users) {
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        // แสดงชื่อ
        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        // แสดงอีเมล
        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        // แสดงที่อยู่
        const addressCell = document.createElement("td");
        addressCell.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        row.appendChild(addressCell);

        tbody.appendChild(row); // เพิ่มแถวลงในตาราง
    });
}

function searchID() {
    const searchInput = document.getElementById("searchInput");
    const resultDiv = document.getElementById("result");
    const id = parseInt(searchInput.value); // แปลงค่า ID เป็นตัวเลข

    resultDiv.textContent = "";
    resultDiv.className = "result-message";

    // ตรวจสอบค่า ID
    if (isNaN(id) || id < 1) {
        resultDiv.textContent = "กรุณาป้อน ID ที่มีค่ามากกว่า0";
        resultDiv.classList.add("error");
        return; // หยุดการทำงานหากค่า ID ไม่ถูกต้อง
    }

    // เรียก API เพื่อค้นหาผู้ใช้ตาม ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("ไม่พบข้อมูลผู้ใช้");
            }
            return response.json();
        })
        .then(user => {
            displayUsers([user]);
            resultDiv.textContent = `พบข้อมูลผู้ใช้ ID: ${id}`;
            resultDiv.classList.add("success");
        })
        .catch(error => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(users => {
                    // แสดงข้อความแจ้งเตือนพร้อมจำนวนข้อมูลทั้งหมด
                    resultDiv.textContent = `ไม่พบข้อมูลผู้ใช้ ID: ${id} (มีข้อมูลทั้งหมด ${users.length} รายการ)`;
                    resultDiv.classList.add("error");
                })
                .catch(error => {
                    console.error("ดึงข้อมูลไม่สำเร็จ:", error);
                });
        });
}