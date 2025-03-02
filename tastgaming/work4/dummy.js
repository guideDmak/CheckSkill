const dummyData = [
    { name: "Conditional", link: "Conditional/age.html", img: "../img/SCR-25680302-klrl.png" },
    { name: "Error", link: "Error/error.html", img: "../img/SCR-25680301-ukar.png" },
    { name: "Loop", link: "Loop/loop.html", img: "../img/SCR-25680301-ukar.png" },
    { name: "Recursive", link: "Recursive/rec.html", img: "../img/SCR-25680302-klrl.png" },
    { name: "Sequential", link: "Sequential/seq.html", img: "../img/SCR-25680302-klrl.png" },
    { name: "Sort", link: "Sorting/sort.html", img: "../img/SCR-25680302-klrl.png" },
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
