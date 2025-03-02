// List Array______________________
let myArray = [];

function add() {
  let input = document.getElementById("arrayInput").value;
  if (input) {
    myArray.push(input);
    document.getElementById("result").innerHTML = "[" + myArray + "]";
    document.getElementById("arrayInput").value = "";
  } else {
    alert("กรุณากรอกข้อมูล");
  }
}
function remove() {
  myArray.pop();
  document.getElementById("result").innerHTML = "[" + myArray + "&nbsp;]";
}

// Dictionary / Object______________________

function ShowStu() {
  let obj = {
    name: "Sue",
    age: 20,
    gender: "female",
  };
  document.getElementById("stu").innerHTML = 
  `
  <p><b>ชื่อ:</b> ${obj.name}</p>
  <p><b>อายุ:</b> ${obj.age}</p>
  <p><b>เพศ:</b> ${obj.gender}</p>
  `
}

// Tuple & Set______________________

let set = new Set();

function tupleClick() {
  let input1 = document.getElementById("tupleInput").value;
  if (input1) {
    set.add(input1);
    document.getElementById("tuple").innerText = Array.from(set).join(", ");
    document.getElementById("tupleInput").value = "";
  } else {
    alert("กรุณากรอกข้อมูล");
  }
}
