// json json.dumps()
let jsonData = '{"name": "Anna", "age": 23}';

let newStudent = {
    name: "Ben",
    age: 21,
    courses: ["Math", "Science"],
};

// json json.loads()_______________
// แปลง JSON Object เป็น String
let jsonString = JSON.stringify(newStudent); 
console.log(jsonString);
console.log("_____")
console.log(jsonString.name);
console.log(jsonString.age);

// แปลง JSON String เป็น Object
let obj = JSON.parse(jsonData); 
console.log("_____")
console.log(obj.name); // "Anna"
console.log(obj.age); // 23
console.log("_____")
console.log(obj);

