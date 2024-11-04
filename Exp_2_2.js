function multiply() {
  let a = parseInt(document.getElementById("num").value);
  if (isNaN(a) || a <= 0 || a == "") {
    document.getElementById("result").innerHTML = "Please enter a valid number";
  } else {
    let i = 1;
    document.getElementById("result").innerHTML = "";
    do {
      document.getElementById("result").innerHTML += `${a} * ${i} = ${a * i}<br>`;
      i++;
    } while (i <= 10);
  }
}
