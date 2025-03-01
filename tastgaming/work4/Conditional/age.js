function checkAge() {

    const age = parseInt(document.getElementById('age').value);

    // if (age > 100) {
    //     alert("กรุณาป้อนอายุไม่เกิน 100");
    //     return;
    // }

    let resultText;
    if (age < 13) {
        resultText = "คุณเป็นเด็ก";
    } else if (age >= 13 && age <= 19) {
        resultText = "คุณเป็นวัยรุ่น";
    } else if (age >= 20 && age <= 40) {
        resultText = "คุณเป็นผู้ใหญ่";
    } else if (age >= 40 && age <= 60) {
        resultText = "คุณเริ่มแก่";
    } else if (age >= 60 && age <= 100) {
        resultText = "คุณเป็นคนแก่";
    } else if (age > 100 && age <= 1000) {
        resultText = "คุณอยู่มาได้ไงขนาดนี้";
    } else if (age > 1000 && age <= 10000) {
        resultText = "คุณเป็นพระเจ้าละ";
    } else if (age > 10000) {
        resultText = "คุณเป็นพระองค์";
    }

    document.getElementById('result').innerText = resultText;
}

function limitInput(input) {
    if (input.value > 1222200) {
        input.value = 1222200;
    } 
}
    