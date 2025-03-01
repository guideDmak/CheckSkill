// Debugging Tools Example
function runDebuggingExample() {
  function calculateSum(a, b) {
    console.log("ค่าของ a:", a); // แสดงค่าของ a ใน console
    console.log("ค่าของ b:", b); // แสดงค่าของ b ใน console

    debugger; // หยุดการทำงานเพื่อตรวจสอบค่าตัวแปรใน Developer Tools
    return a + b;
  }

  let result = calculateSum(5, 10);
  document.getElementById("debuggingResult").innerText = `ผลลัพธ์: ${result}`;
}

// Exception Handling Example
function runExceptionHandlingExample() {
  function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("หารด้วยศูนย์ไม่ได้"); // โยน error ถ้า b เป็น 0
      }
      return a / b;
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error.message); // แสดงข้อความ error ใน console
      return null;
    } finally {
      console.log("การทำงานเสร็จสิ้น"); // แสดงข้อความนี้ไม่ว่าจะมี error หรือไม่
    }
  }

  let result1 = divide(10, 2); // ผลลัพธ์: 5
  let result2 = divide(10, 0); // ผลลัพธ์: null และแสดงข้อความ error

  document.getElementById(
    "exceptionResult"
  ).innerText = `ผลลัพธ์ 1: ${result1}, ผลลัพธ์ 2: ${result2}`;
}
