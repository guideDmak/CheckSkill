function show() {
  let input = document.getElementById("number").value;
  let output = document.getElementById("result");

  let int, num, str, bool;
  let str2 = (input).toString();

  if (isNaN(input)) {
    int = "ไม่ใช่ตัวเลข";
    num = "ไม่ใช่ตัวเลข";
    str = "ไม่ใช่ตัวเลข";
    bool = "ไม่ใช่ตัวเลข";
  } else {
    bool = num > 0;
    int = parseInt(input);
    num = parseFloat(input);
    str = num.toString();
  }

  output.innerHTML = `
        <p><b>ค่า Int :</b> ${int}</p>
        <p><b>ค่า Float :</b> ${typeof num === "number" ? num.toFixed(2) : num}</p>
        <p><b>เปลื่ยนเลข เป็นค่า String :</b> "${str}"</p>
        <p><b>เป็น String:</b> "${str2}"</p>
        <p><b>เป็น Boolean (บวกเป็น true, ลบเป็น false):</b> ${bool}</p>
    `;
}