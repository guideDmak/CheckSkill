function Butclick() {
  console.log("Hello, VS Code!");
  const a = Math.floor(Math.random()*100)+1;
  const b = Math.floor(Math.random()*100)+1;
  const sum = (a, b) => {
    return a + b;
  };
  console.log(`a=${a} + b=${b}`);
  console.log(sum(a, b));
}

function Butclick2() {
  console.clear();
  console.log("Hello, VS Code!");
  
  const a = Math.floor(Math.random()*100)+1;
  const b = Math.floor(Math.random()*100)+1;
  const sum = (a, b) => {
    return a + b;
  };
  console.log(`a=${a} + b=${b}`);
  console.log(sum(a, b));
}

function trunB() {
  history.back();
}