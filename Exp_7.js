let arr = [];
let n = 0;
function addToArray() {
  n = parseInt(document.getElementById("arraySize").value);
  const element = document.getElementById("addObject").value;
  if (arr.length < n) {
    arr.push(element);
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
  } 
  else {
    document.getElementById("arrayDisplay").innerText = `Array is Filled`;
  }
}

function checkObject() {
  let element = parseInt(document.getElementById("checkObject").value);
  const size = parseInt(document.getElementById("arraySize").value);

  if (element >= size || element < 0) {
    document.getElementById("array").innerText = `Index out of Bounds`;
  } else {
    let val = arr[element]; // Do not parse JSON unless needed
    document.getElementById("array").innerText = Array.isArray(val) ? `Value at ${element} is an Array`: `Value at ${element} is not an Array`;
  }
}
