const dummyData = [
  { name: "Work 1", link: "tastgaming/work1/work1.html" },
  { name: "Work 2", link: "tastgaming/work2/work2.html" },
  { name: "Work 3", link: "tastgaming/work3/work3.html" },
  { name: "Work 4", link: "tastgaming/work4/work4.html" },
  { name: "Work 5", link: "tastgaming/work5/work5.html" },
];

document.addEventListener("DOMContentLoaded", () => {
  const fileList = document.querySelector(".file-list");
  dummyData.forEach((file) => {
    const fileContainer = document.createElement("div");
    fileContainer.classList.add("file-container");
    fileContainer.innerHTML = `
        <button class="button-work" onclick="window.location.href = '${file.link}';">
            ${file.name}
        </button>
        `;
    fileList.appendChild(fileContainer);
  });
});
