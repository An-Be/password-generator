/* THINGS TO DO */

//consts with possibles characters
//function randomizing possible characters/outputting a randomized password according to a password length

//get elements needed
let lengthElement = document.getElementById("length");
let password = document.getElementById("final-password");
const button = document.getElementById("btn");

const lowerElement = document.getElementById("lower");
const upperElement = document.getElementById("upper");
const numberElement = document.getElementById("numbers");
const specialElement = document.getElementById("special");

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allTheLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialChars = "!@#$%^&*()_-";
const everything =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-";
let str = "";

//function to generate needed chars according to boxes checked
function generateNeededChars() {
  if (lowerElement.checked) {
    str += lowerLetters;
  }
  if (upperElement.checked) {
    str += upperLetters;
  }
  if (numberElement.checked) {
    str += numbers;
  }
  if (specialElement.checked) {
    str += specialChars;
  }
  return str;
}

//function to generate password
function generatePassword(length, str) {
  let finalPassword = "";
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * str.length);
    finalPassword += str.charAt(randomNumber);
  }
  return finalPassword;
}

//event listeners
button.addEventListener("click", function () {
  let length = lengthElement.value;
  let str = generateNeededChars();
  let finalPassword = generatePassword(length, str);

  password.textContent = finalPassword;
  password.style.textAlign = "center";
});
