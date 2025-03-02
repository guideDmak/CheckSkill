const dummyData = [
    { name: "Conditional", link: "Conditional/age.html", img: "../img/Age.png" },
    { name: "Error", link: "Error/error.html", img: "../img/Error.png" },
    { name: "Loop", link: "Loop/loop.html", img: "../img/Loop.png" },
    { name: "Recursive", link: "Recursive/rec.html", img: "../img/Rec.png" },
    { name: "Sequential", link: "Sequential/seq.html", img: "../img/Seq.png" },
    { name: "Sort", link: "Sorting/sort.html", img: "../img/Sort.png" },
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
