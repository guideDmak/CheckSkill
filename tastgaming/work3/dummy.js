const dummyData = [
    { name: "Event", link: "Event/event.html", img: "../img/SCR-25680302-klrl.png" },
    { name: "Html and Js", link: "html และ js/index.html", img: "../img/SCR-25680301-ukar.png" },
    { name: "Email", link: "ตรวจสอบข้อมูล/email.html", img: "../img/SCR-25680301-ukar.png" },
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