// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //console.log("inside get passowrd options");

  let length = Number.parseInt(prompt("enter the length"));
  console.log(typeof length, length);
  while (length <= 8 || length >= 128 || length == NaN) {
    length = Number.parseInt(prompt("enter the length again"));
  }
  //console.log("loop");

  let spc = confirm("Do you want special characters");

  let low = confirm("Do you want lower case characters");
  let up = confirm("Do you want upper case characters");
  let nume = confirm("Do you want numeric characters");

  // console.log("return", {
  // length,
  // spc,
  // low,
  // up,
  // nume,
  // });
  return {
    length,
    spc,
    low,
    up,
    nume,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  //console.log("inside get random");

  let min = 0;
  let max = arr.length - 1;
  //console.log(Math.floor(Math.random() * (max - min + 1)) + m);
  let randIndex = Math.floor(Math.random() * (max - min + 1));

  return arr[randIndex];
}

// Function to generate password with user input
function generatePassword() {
  console.log("inside genrate passowkrd");
  let pass = "";
  let opt = getPasswordOptions();
  for (let i = 0; i < opt.length; ) {
    if (opt.low) {
      pass += getRandom(lowerCasedCharacters);
      i++;
    }
    if (opt.up) {
      pass += getRandom(upperCasedCharacters);
      i++;
    }
    if (opt.nume) {
      pass += getRandom(numericCharacters);
      i++;
    }
    if (opt.spc) {
      pass += getRandom(specialCharacters);
      i++;
    }
  }
  return pass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //console.log("inside writepassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
