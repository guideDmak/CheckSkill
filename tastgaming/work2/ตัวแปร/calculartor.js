function show() {
  let input = document.getElementById("number").value;
  let output = document.getElementById("result");

  let int = parseInt(input);
  let num = parseFloat(input);
  let str = num.toString();
  let bool

  if (isNaN(input)) {
    no = 'ไม่ใช่ตัวเลข';
    bool = 'ไม่ใช่ตัวเลข';
  } else {
    bool = num > 0;
  }

  output.innerHTML = `
        <p><b>ค่า Int :</b> ${int}</p>
        <p><b>ค่า Float :</b> ${num.toFixed(2)}</p>
        <p><b>เป็น String:</b> "${str}"</p>
        <p><b>เป็น Boolean (บวกเป็น true, ลบเป็น false):</b> ${bool}</p>
    `
}
