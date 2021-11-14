// Assignment Code
var generateBtn = document.querySelector("#generate");
//shid
var charNum;
var clickBtn = document.getElementById("generate");
clickBtn.addEventListener("click", function () {
  console.log("Generate button was clicked")

//Ask user how many characters they want
    var userChoice = window.prompt("How many characters would you like your password to contain?");
    if (!userChoice) {
      // console.log("cancelled");
      return;
    } else if (userChoice < 8 || userChoice > 128) {
        userChoice = window.prompt("You must choose a number between 8 and 128.")
        console.log("not num")
    } else {
      lowercase = confirm("Would you like to include lowercase characters?");
      uppercase = confirm("Would you like to include uppercase characters?");
      numeric = confirm("Would you like to include numeric characters?");
      special = confirm("Would you like to include special characters?");
    };
    if (!lowercase && !uppercase && !numeric && !special) {
      caseChoice = alert("You must choose at least one type of character.")
    } else if (lowercase) {
      
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
