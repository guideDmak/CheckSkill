let lotteryNumber = "";

// สุ่มเลขหวย 6 หลัก
function generateLottery() {
    lotteryNumber = "";
    for (let i = 0; i < 6; i++) {
        lotteryNumber += Math.floor(Math.random() * 10); // สุ่มเลข 0-9
    }
    document.getElementById("lotteryNumber").innerText = `เลขหวยที่ออก: ${lotteryNumber}`;
    document.getElementById("result").innerText = ""; // ล้างผลลัพธ์เก่า
}

// ตรวจสอบการทายเลข
function checkGuess() {
    const userGuess = document.getElementById("userGuess").value;

    // ตรวจสอบว่าผู้ใช้ป้อนเลข 6 หลักหรือไม่
    if (userGuess.length !== 6 || isNaN(userGuess)) {
        alert("กรุณาป้อนเลข 6 หลักให้ถูกต้อง");
        return;
    }

    // ตรวจสอบว่าตรงกับเลขหวยหรือไม่
    if (userGuess === lotteryNumber) {
        document.getElementById("result").innerText = "ยินดีด้วย! คุณทายถูก";
    } else {
        document.getElementById("result").innerText = "เสียใจด้วย! คุณทายผิด";
    }
}