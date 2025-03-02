let Bgdisgo;

function changeBgColor() {
    document.body.style.backgroundColor = 
        "#" + Math.floor(Math.random()*16777215).toString(16);
}


function startColorChange() {
    if (!Bgdisgo) { // ตรวจสอบว่า interval ยังไม่ทำงานอยู่
        Bgdisgo = setInterval(changeBgColor, 100); // เปลี่ยนสีทุก 1 วินาที
        document.getElementById("startColorChange").innerText = "หยุดดิสโก้";
    } else{
        clearInterval(Bgdisgo);
        Bgdisgo = null;
        document.getElementById("startColorChange").innerText = "สุ่มสีดิสโก้";
    }
}

function resetBgColor() {
    document.body.style.backgroundColor = "#A1D9F3";
}
