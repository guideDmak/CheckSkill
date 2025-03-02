function validateForm() {
    let email = document.getElementById("email").value;
    let errorText = document.getElementById("error");

    if (!email.includes("@") || !email.endsWith(".com")) {
        errorText.innerText = "ใส่อีเมลให้ถูกต้อง!";
        return false;
    }
    alert("ส่งข้อมูลสำเร็จ!");
    return true;
}