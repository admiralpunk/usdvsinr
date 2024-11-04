function changeInputColor() {
  document.getElementById("focusInput").style.backgroundColor = "lightblue";
}

function resetInputColor() {
  document.getElementById("focusInput").style.backgroundColor = "white";
}

function changeBackgroundColorOnHover() {
  document.body.style.backgroundColor = "lightgreen"; // Change entire background color
  document.getElementById("colorBox").style.backgroundColor = "lightgreen"; // Change colorBox background color
}

function resetBackgroundColorOnLeave() {
  document.body.style.backgroundColor = "white"; // Reset entire background color
  document.getElementById("colorBox").style.backgroundColor = "white"; // Reset colorBox background color
}

function changeBackgroundColorOnFocus() {
  document.body.style.backgroundColor = "lightblue"; // Change entire background color
  document.getElementById("colorBox").style.backgroundColor = "lightblue"; // Change colorBox background color
}
