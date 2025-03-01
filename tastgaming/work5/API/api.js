function fetchData() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error("ดึงบ่ได่:", error);
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

        tbody.appendChild(row);
    });
}