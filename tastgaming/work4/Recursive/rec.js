// ฟังก์ชัน Recursive สำหรับหาค่าแฟกทอเรียล
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: แฟกทอเรียลของ 0 หรือ 1 คือ 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
// ฟังก์ชัน Recursive สำหรับหาค่า Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0; // Base case: Fibonacci(0) = 0
  }
  if (n === 1) {
    return 1; // Base case: Fibonacci(1) = 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
}

// คำนวณ Factorial
function calculateFactorial() {
  const n = parseInt(document.getElementById("factorialInput").value);
  if (isNaN(n) || n < 0) {
    alert("กรุณาป้อนค่าที่เป็นจำนวนเต็มบวกหรือศูนย์");
    return;
  }
  const result = factorial(n);
  document.getElementById(
    "factorialResult"
  ).innerText = `Factorial ของ ${n} คือ: ${result}`;
}

// คำนวณ Fibonacci
function calculateFibonacci() {
  const n = parseInt(document.getElementById("fibonacciInput").value);
  if (isNaN(n) || n < 0) {
    alert("กรุณาป้อนค่าที่เป็นจำนวนเต็มบวกหรือศูนย์");
    return;
  }
  const result = fibonacci(n);
  document.getElementById(
    "fibonacciResult"
  ).innerText = `Fibonacci ตัวที่ ${n} คือ: ${result}`;
}
