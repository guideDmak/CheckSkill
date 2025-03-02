const dummyData = [
    { name: "Calculator", link: "ตัวแปร/calculartor.html", img: "../img/Cal.png" },
    { name: "JSON Data", link: "json data/json.html", img: "../img/Json.png" },
    { name: "Database", link: "Database/data.html", img: "../img/Data_Str.png" }
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