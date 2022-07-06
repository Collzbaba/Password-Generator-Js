// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = Number(
    prompt("How many characters would you likr your password to be?")
  );
  while (isNaN(length) || length < 8 || length > 128)
    length = Number(
      prompt(
        "Lenght must be 8-128 characters. How many characters would you like your password to be?"
      )
    );
  {
  }

  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  var chosenString = "";
  var password = "";
  var allowed = {};
  if (uppers) chosenString += "QWERTYUIOPASDFGHJKLZXCVBNM";
  if (lowers) chosenString += "qwertyuiopasdfghjklzxcvbnm";
  if (numbers) chosenString += "1234567890";
  if (symbols) chosenString += "!@#$%^&*(){}[]=<>/,.";

  for (var i = 0; i < length; i++) {
    //password += any(any(allowed).value);
    var index = Math.floor(Math.random() * chosenString.length);
    password += chosenString[index];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //document.getElementById("password").value = select(password).join("");
  passwordText.value = password;
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
