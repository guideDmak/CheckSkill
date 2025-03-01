document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("กรุณาป้อนรายการ!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "ทำเสร็จแล้ว";
    completeButton.className = "complete-btn";
    completeButton.onclick = function () {
        li.classList.toggle("completed");
        completeButton.textContent = li.classList.contains("completed") ? "ยกเลิกทำเสร็จ" : "ทำเสร็จแล้ว";
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
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        const task = {
            text: taskList.children[i].textContent.replace("ทำเสร็จแล้วลบ", "").replace("ยกเลิกทำเสร็จลบ", "").trim(),
            completed: taskList.children[i].classList.contains("completed")
        };
        tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "ยกเลิกทำเสร็จ" : "ทำเสร็จแล้ว";
        completeButton.className = "complete-btn";
        completeButton.onclick = function () {
            li.classList.toggle("completed");
            completeButton.textContent = li.classList.contains("completed") ? "ยกเลิกทำเสร็จ" : "ทำเสร็จแล้ว";
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