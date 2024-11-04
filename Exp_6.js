let arr = [];
let n = 0;

function addElement() {
    n = parseInt(document.getElementById("arraySize").value);
    const newElement = document.getElementById("newElement").value;

    if (arr.length < n) {
        arr.push(newElement);
        document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
    } else {
        document.getElementById("arrayDisplay").innerText = `Array is Filled`;
    }
}

function removeElement() {
    const elementToRemove = document.getElementById("removeElement").value;
    const index = arr.indexOf(elementToRemove);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}

function checkValue() {
    const value = document.getElementById("checkValue").value;
    const index = arr.indexOf(value);
    const found = index !== -1; // Check if the value exists

    // Clear the previous check result
    document.getElementById("checkResult").innerText = "";

    if (found) {
        document.getElementById("checkResult").innerText = `Value "${value}" found at index ${index}.`;
    } else {
        document.getElementById("checkResult").innerText = `Value "${value}" not found.`;
    }
}

function emptyArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerText = `Array: [${arr.join(", ")}]`;
}
