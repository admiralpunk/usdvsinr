function multiply() {
  let a = parseInt(document.getElementById("num").value);
  for (let i = 1; i <= 10; i++) {
    document.getElementById("result").innerHTML += `${a} * ${i}: ${a * i}<br>`;
  }
}
