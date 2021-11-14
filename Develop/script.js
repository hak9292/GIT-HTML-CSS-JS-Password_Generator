// Assignment Code
var generateBtn = document.querySelector("#generate");
//shid
var clickBtn = document.getElementById("generate");
clickBtn.addEventListener("click", function () {
  console.log("Generate button was clicked")
})

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
