// Assignment Code
var generateBtn = document.querySelector("#generate");
var charNum = 0;
var format = " ";
var password = " ";
var clickBtn = document.getElementById("generate");
var lower = "qwertyuiopasdfghjklzxcvbnm";
//converts "lower" string into uppercase
var upper = lower.toUpperCase();
var num = "1234567890";
var spec = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {
// clickBtn.addEventListener("click", function () {
  //console.log("Generate button was clicked")

//Ask user how many characters they want
    charNum = window.prompt("How many characters would you like your password to contain?");
    if (!charNum) {
      console.log("cancelled");
      return;
    } else if (isNaN(charNum)) {
        userChoice = window.alert("Password length must be provided as a number.")
        return;
    } else if (charNum < 8 || charNum> 128) {
        charNum = window.alert("You must choose a number between 8 and 128.");
        return;
        // console.log("not num");
    } else {
      lowercase = confirm("Would you like to include lowercase characters?");
      uppercase = confirm("Would you like to include uppercase characters?");
      numeric = confirm("Would you like to include numeric characters?");
      special = confirm("Would you like to include special characters?");
    }
    if (lowercase) {
      format += lower;
    }
    if (uppercase) {
      format += upper;
    }
    if (numeric) {
      format += num;
    }
    if (special) {
      format += spec;
    } else if (!lowercase && !uppercase && !numeric && !special) {
      alert("You must choose at least one type of character.");
      return;
    }
    for (i = 0; i < charNum; i++) {
      password += format[Math.floor(Math.random() * format.length)];
    } return password;
  }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
