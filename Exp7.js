let arr = [];
let n = 0;

function addToArray() {
    const n = document.getElementById("arraySize").value;
    const element = document.getElementById("addObject").value;

    if (arr.length < n) {
        try {
            let obj = JSON.parse(element);
            arr.push(JSON.stringify(obj));
            document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
            document.getElementById("ans").innerText = "";
        } catch (error) {
            document.getElementById("ans").innerText = "Invalid object format. Use JSON format.";
        }
    } else {
        document.getElementById("arrayDisplay").innerText = `Array is Filled`;
    }
}

function checkObject() {
    let element = document.getElementById("checkObject").value;
    const size = document.getElementById("arraySize").value;

    if (element >= size || element < 0 || element >= arr.length) {
        document.getElementById("array").innerText = `Index out of Bound`;
    } else {
        let val = JSON.parse(arr[element]);
        document.getElementById("array").innerText = Array.isArray(val) ? `Value at index ${element} is an Array` : `Value at index ${element} is not an Array`;
    }
}

function resetFields() {
    document.getElementById("arraySize").value = '';
    document.getElementById("addObject").value = '';
    document.getElementById("checkObject").value = '';
    document.getElementById("ans").innerText = '';
    document.getElementById("array").innerText = '';
    document.getElementById("arrayDisplay").innerText = '';
    arr = [];
}
