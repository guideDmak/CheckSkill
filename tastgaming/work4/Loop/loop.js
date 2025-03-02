
function runWhileLoop() {
    let input = "";
    let output = "คุณป้อนค่า: ";

    while (true) {
        input = prompt("ป้อนค่าของคุณ (พิมพ์ 'p' เพื่อหยุด):");
        if (input === "p") {
            break;
        }
        output += input + " ";
    }

    document.getElementById('result').innerText = output;
}

// ไม่แนะนำใช่แบบนี้เพราะมันจะ Stack Overflow ได้
// function runRecursiveLoop(output = "คุณป้อนค่า: ") {
//     const input = prompt("ป้อนค่าของคุณ (พิมพ์ 'exit' เพื่อหยุด):");
//     if (input === "exit") {
//         document.getElementById('result').innerText = output;
//     } else {
//         runRecursiveLoop(output + input + " "); // เรียกฟังก์ชันตัวเองซ้ำ
//     }
// }
// 