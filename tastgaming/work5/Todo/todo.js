document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

// ปุ่มทำงาน___________________________
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "";
  resultDiv.className = "result-message";

  if (taskText === "") {
    resultDiv.textContent = "กรุณาป้อนรายการ!";
    resultDiv.classList.add("error");
    return;
  }

  // ตรวจสอบชื่องานซ้ำ
  const taskList = document.getElementById("taskList");
  const existingTasks = Array.from(taskList.children).map((li) =>
    li.textContent
      .replace("ทำเสร็จแล้วลบ", "")
      .replace("ยกเลิกทำเสร็จลบ", "")
      .trim()
  );

  if (existingTasks.includes(taskText)) {
    resultDiv.textContent = `ชื่องาน "${taskText}" ซ้ำกัน กรุณาเปลี่ยนชื่องาน`;
    resultDiv.classList.add("error");
    return; // หยุดการทำงานหากพบชื่องานซ้ำ
  }

  // เพิ่มงานใหม่
  const li = document.createElement("li");
  li.textContent = taskText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "ทำเสร็จแล้ว";
  completeButton.className = "complete-btn";
  completeButton.onclick = function () {
    li.classList.toggle("completed");
    completeButton.textContent = li.classList.contains("completed")
      ? "ยกเลิกทำเสร็จ"
      : "ทำเสร็จแล้ว";
    saveTasks();
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "ลบ";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    taskList.removeChild(li);
    saveTasks();
  };

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  saveTasks();
  taskInput.value = "";

  // แสดงข้อความสำเร็จ
  resultDiv.textContent = "เพิ่มรายการสำเร็จ!";
  resultDiv.classList.add("success");

  // 3 วินาที
  setTimeout(() => {
    resultDiv.textContent = "";
    resultDiv.className = "result-message";
  }, 3000);
}

// บันทึกงาน___________________________
function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = [];
  const taskNames = new Set();

  for (let i = 0; i < taskList.children.length; i++) {
    const taskText = taskList.children[i].textContent
      .replace("ทำเสร็จแล้วลบ", "")
      .replace("ยกเลิกทำเสร็จลบ", "")
      .trim();

    if (taskNames.has(taskText)) {
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = `ชื่องาน "${taskText}" ซ้ำกัน กรุณาเปลี่ยนชื่องาน`;
      resultDiv.classList.add("error");
      return;
    }

    taskNames.add(taskText);

    const task = {
      text: taskText,
      completed: taskList.children[i].classList.contains("completed"),
    };
    tasks.push(task);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  // แสดงข้อความสำเร็จ
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "บันทึกเรียบร้อยแล้ว";
  resultDiv.classList.add("success");

  // 3 วินาที
  setTimeout(() => {
    resultDiv.textContent = "";
    resultDiv.className = "result-message";
  }, 5000);
}

// โหลดงาน___________________________
function loadTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed
      ? "ยกเลิกทำเสร็จ"
      : "ทำเสร็จแล้ว";
    completeButton.className = "complete-btn";
    completeButton.onclick = function () {
      li.classList.toggle("completed");
      completeButton.textContent = li.classList.contains("completed")
        ? "ยกเลิกทำเสร็จ"
        : "ทำเสร็จแล้ว";
      saveTasks();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
      saveTasks();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
