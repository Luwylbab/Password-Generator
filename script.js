var generateBtn = document.querySelector("#generate");

function writePassword() {
  var selectedTypes = [];
  var characterCount = prompt("Enter the desired character count (between 8 and 124):");
  characterCount = parseInt(characterCount);

  if (characterCount >= 8 && characterCount <= 124) {
    var uppercase = confirm("Include uppercase letters?");
    var lowercase = confirm("Include lowercase letters?");
    var numbers = confirm("Include numbers?");
    var specialChar = confirm("Include special characters?");

    if (uppercase) {
      selectedTypes.push("uppercase");
    }

    if (lowercase) {
      selectedTypes.push("lowercase");
    }

    if (numbers) {
      selectedTypes.push("numbers");
    }

    if (specialChar) {
      selectedTypes.push("specialChar");
    }

    if (selectedTypes.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    var password = generatePassword(characterCount, selectedTypes);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    alert("Your randomly generated password is: " + password);
  } else {
    alert("Invalid character count. Please enter a number between 8 and 124.");
  }
}

function generatePassword(characterCount, selectedTypes) {
  var password = "";
  var availableCharacters = "";

  for (var i = 0; i < selectedTypes.length; i++) {
    var type = selectedTypes[i];

    if (type === "uppercase") {
      availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (type === "lowercase") {
      availableCharacters += "abcdefghijklmnopqrstuvwxyz";
    } else if (type === "numbers") {
      availableCharacters += "1234567890";
    } else if (type === "specialChar") {
      availableCharacters += "!@#$%^&*()?";
    }
  }

  for (var i = 0; i < characterCount; i++) {
    var randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters.charAt(randomIndex);
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);