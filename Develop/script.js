// Assignment Code
var generateBtn = document.querySelector("#generate");
//shid
var charNum;
var clickBtn = document.getElementById("generate");
clickBtn.addEventListener("click", function () {
  console.log("Generate button was clicked")

//Ask user how many characters they want
    var userChoice = window.prompt("How many characters would you like your password to contain?");
    if (8 > userChoice > 128) {
      console.log("worked");
    
      return;
    }
    else if (userChoice === !Number) {

  }
})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
