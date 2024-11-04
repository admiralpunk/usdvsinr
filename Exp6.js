let Array2 = [];

// Set the array length (doesn't actually limit the array size, for UI display only)
function length() {
    const n = document.getElementById('1').value;
    const str = `You have entered length: ${n}`;
    document.getElementById("res").innerHTML = str;
}

// Set the array from input (comma-separated)
function arrayip() {
    const arrval = document.getElementById('2').value;
    Array2 = arrval.split(',').map(item => item.trim()); // Trim spaces from array values
    const str = `Array elements set: ${Array2.join(', ')}`;
    document.getElementById("res2").innerHTML = str;
}

// Delete a specified element from the array
function del() {
    const val = document.getElementById('delete').value;
    const index = Array2.indexOf(val);

    if (index === -1) {
        document.getElementById("res2").innerHTML = `Value: ${val} is not present in the array`;
    } else {
        Array2.splice(index, 1);
        document.getElementById("res2").innerHTML = `Value: ${val} is deleted. New array: ${Array2.join(', ')}`;
    }
}

// Find a specified element in the array
function find() {
    const val = document.getElementById('find').value;
    const index = Array2.indexOf(val);

    if (index === -1) {
        document.getElementById("res2").innerHTML = `Value: ${val} is not present in the array`;
    } else {
        document.getElementById("res2").innerHTML = `Value: ${val} is present in the array at index ${index}`;
    }
}

// Empty the entire array
function Empty() {
    Array2 = [];
    document.getElementById("res2").innerHTML = "Array2 is emptied";
}

// Display the current array
function Display() {
    if (Array2.length === 0) {
        document.getElementById("res2").innerHTML = "Array is empty";
    } else {
        document.getElementById("res2").innerHTML = `Current Array: ${Array2.join(', ')}`;
    }
}

// Reset all fields and results
function resetFields() {
    // Clear input fields
    document.getElementById('1').value = '';
    document.getElementById('2').value = '';
    document.getElementById('delete').value = '';
    document.getElementById('find').value = '';

    // Reset array and displayed results
    Array2 = [];
    document.getElementById('res').innerHTML = '';
    document.getElementById('res2').innerHTML = '';
}