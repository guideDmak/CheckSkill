let array = [];

function generateArray() {
  array = Array.from(
    { length: 100 },
    () => Math.floor(Math.random() * 1000) + 1
  );
  document.getElementById("arrayOutput").value =
    "Array ก่อนเรียงลำดับ:\n" + array.join(", ");
  document.getElementById("result").innerText = "เรียงเลยยย";
}

// Bubble Sort
function bubbleSort() {
  let arr = [...array]; // สร้างสำเนาของ Array เพื่อไม่ให้กระทบกับ Array เดิม
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // สลับค่าถ้าค่าปัจจุบันมากกว่าค่าถัดไป
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  document.getElementById("arrayOutput").value =
    "Array หลังเรียงลำดับ (Bubble Sort):\n" + arr.join(", ");
  document.getElementById("result").innerText = "Bubble Sort เสร็จสิ้น!";
}

// Selection Sort
function selectionSort() {
  let arr = [...array];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // หาตำแหน่งของค่าที่น้อยที่สุด
      }
    }
    // สลับค่าถ้าตำแหน่งของค่าที่น้อยที่สุดไม่ใช่ตำแหน่งปัจจุบัน
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  document.getElementById("arrayOutput").value =
    "Array หลังเรียงลำดับ (Selection Sort):\n" + arr.join(", ");
  document.getElementById("result").innerText = "Selection Sort เสร็จสิ้น!";
}

// สร้าง Array เริ่มต้นเมื่อหน้าเว็บโหลด
// window.onload = generateArray;
