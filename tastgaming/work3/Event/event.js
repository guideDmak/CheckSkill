// คลิกปุ่ม______________________________
document.getElementById("clickBtn").onclick = function() {
    alert("คุณคลิกปุ่ม!");
};

// เมาส์เข้า___________________________
document.getElementById("box").onmouseover = function() {
    this.style.backgroundColor = "lightgreen";
    this.innerText = "เมาส์อยู่ที่นี่!";
};
// เมาส์ออก_____________________________
document.getElementById("box").onmouseout = function() {
    this.style.backgroundColor = "#A1D9F3";
    this.innerText = "เลื่อนเมาส์มาที่นี่";
};

// พิมพ์__________________________________
document.getElementById("textInput").addEventListener("keyup", function(event) {
    console.log("คุณพิมพ์: " + event.target.value);
    document.getElementById("result").innerText = "คุณพิมพ์ว่า: " + event.target.value;
});