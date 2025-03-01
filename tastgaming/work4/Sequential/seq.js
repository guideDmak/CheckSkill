function seqCal() {
  let radius = document.getElementById("radius").value;

  if (isNaN(radius) || radius <= 0) {
    alert("ใส่ค่าที่เป็นตัวเลขและมากกว่า 0");
    return;
  }
  let result = Math.PI * radius * radius;
  document.getElementById("result").innerText = `${result.toFixed(2)}`;
}
