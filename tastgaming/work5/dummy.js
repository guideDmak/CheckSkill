const dummyData = [
    { name: "API", link: "API/api.html", img: "../img/Api.png" },
    { name: "Grade", link: "Grade/garde.html", img: "../img/Stu.png" },
    { name: "Lotto", link: "lotto/lotto.html", img: "../img/Lotto.png" },
    { name: "Todo", link: "Todo/todo.html", img: "../img/Todo.png" },
];

document.addEventListener("DOMContentLoaded", () => {
    const fileList = document.querySelector(".file-list");
    dummyData.forEach(file => {
        const fileContainer = document.createElement("div");
        fileContainer.classList.add("file-container");
        fileContainer.innerHTML = `
            <div class="file">
                <div class="file-icon">
                    <img src="${file.img}" alt="${file.name}" onclick="window.location.href='${file.link}'">
                </div>
                <div class="file-info">
                    <div class="file-name">${file.name}</div>
                    <div class="file-details">Click to open</div>
                </div>
            </div>
        `;
        fileList.appendChild(fileContainer);
    });
});
