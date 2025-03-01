// จำกัดค่า input ให้อยู่ในช่วง 0-100
function limit(input) {
  let score = input.value;

  if (score > 100) {
    input.value = 100;
  } else if (score < 0) {
    input.value = 0;
  }
}

// ห้ามป้อนเกิน 100____________________
function DidInput(event) {
  const key = event.key;
  const input = event.target;
  const value = input.value + key;

  if (value > 100 || value < 0) {
    event.preventDefault(); // ยกเลิกการกดคีย์
  }
}

// คำนวณ GPA____________________
function calGPA() {
  const scores = [
    parseInt(document.getElementById("score1").value),
    parseInt(document.getElementById("score2").value),
    parseInt(document.getElementById("score3").value),
    parseInt(document.getElementById("score4").value),
    parseInt(document.getElementById("score5").value),
  ];

  for (let i = 0; i < scores.length; i++) {
    if (isNaN(scores[i]) || scores[i] < 0 || scores[i] > 100) {
      alert("กรุณากรอกคะแนนให้ถูกต้อง (0-100)");
      return;
    }
  }

  const grades = scores.map((score) => {
    if (score >= 80) return 4;
    if (score >= 75) return 3.5;
    if (score >= 70) return 3;
    if (score >= 65) return 2.5;
    if (score >= 60) return 2;
    if (score >= 55) return 1.5;
    if (score >= 50) return 1;
    return 0;
  });

  // คำนวณ GPA
  const credits = [3, 3, 3, 3, 3];
  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    totalGradePoints += grades[i] * credits[i];
    totalCredits += credits[i];
  }

  const gpa = (totalGradePoints / totalCredits).toFixed(2);
  document.getElementById("result").innerText = `GPA ของคุณคือ: ${gpa}`;
}
