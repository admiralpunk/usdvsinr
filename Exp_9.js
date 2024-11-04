function validateForm() {
  // Get form fields
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let pincode = document.getElementById("pincode").value.trim();
  let state = document.getElementById("state").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();
  let genderMale = document.getElementById("male").checked;
  let genderFemale = document.getElementById("female").checked;
  let errorMessage = document.getElementById("errorMessage");

  // Regular Expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/; // Name should contain letters only and spaces
  const specialCharRegex = /[^a-zA-Z\s]/; // Name shouldn't contain special characters
  const cityStateRegex = /^[a-zA-Z\s]+$/; // City and State should only contain letters and spaces
  const mobileRegex = /^\d{10}$/; // Mobile number should be exactly 10 digits
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format validation
  const pincodeRegex = /^\d{6}$/; // Pincode should be exactly 6 digits

  let errorMessages = [];

  // Name validation (no special characters)
  if (!name || specialCharRegex.test(name)) {
    errorMessages.push(
      "Please enter a valid name (letters only, no special characters)."
    );
  }

  // Address validation (non-empty)
  if (!address) {
    errorMessages.push("Address cannot be empty.");
  }

  // City validation (only letters and spaces)
  if (!city || !cityStateRegex.test(city)) {
    errorMessages.push(
      "Please enter a valid city (letters only, no numbers or special characters)."
    );
  }

  // Pincode validation (exactly 6 digits)
  if (!pincode || !pincodeRegex.test(pincode)) {
    errorMessages.push("Please enter a valid 6-digit pincode.");
  }

  // State validation (only letters and spaces)
  if (!state || !cityStateRegex.test(state)) {
    errorMessages.push(
      "Please enter a valid state (letters only, no numbers or special characters)."
    );
  }

  // Gender validation
  if (!genderMale && !genderFemale) {
    errorMessages.push("Please select a gender.");
  }

  // Mobile number validation (no spaces and must be 10 digits)
  if (!mobile || mobile.includes(" ") || !mobileRegex.test(mobile)) {
    errorMessages.push(
      "Please enter a valid 10-digit mobile number (no spaces)."
    );
  }

  // Email validation (no spaces and proper format)
  if (!email || email.includes(" ") || !emailRegex.test(email)) {
    errorMessages.push("Please enter a valid email address (no spaces).");
  }

  // If there are errors, display them
  if (errorMessages.length > 0) {
    errorMessage.innerHTML = errorMessages.join("<br>");
    return false; // Prevent form submission
  }

  // If no errors, redirect to the success page
  window.location.href = "success.html";
  return false; // Prevent form submission
}
