// Lower case, upper case, and numbers arrays
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// For neatness, I chose to seperate the special characters by similarity (via their codenames) in 5 arrays. I then concatenated the 5 arrays into one
const part1 = ["\u0020","\u0021","\u0022","\u0023","\u0024","\u0025","\u0026","\u0027","\u0028","\u0029"];
const part2 = ["\u002A","\u002B","\u002C","\u002D","\u002E","\u002F"];
const part3 = ["\u003A","\u003B","\u003C","\u003D","\u003E","\u003F"];
const part4 = ["\u0040","\u005B","\u005C","\u005D","\u005E","\u005F"];
const part5 = ["\u0060","\u007B","\u007C","\u007D","\u007E"];
const specialChars = part1.concat(part2,part3,part4,part5);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePasswordContent();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePasswordContent() {
  var options = [];
  var wantsLowerCase = window.confirm("Would you like lower case letters?");
  var wantsUpperCase = window.confirm("Would you like upper case letters?");
  var wantsNumbers = window.confirm("Would you like numbers?");
  var wantsSpecialChars = window.confirm("Would you like special characters?");

  // Here we do a recursive call. Variable string holds the value when we convert to base case
  if (!wantsLowerCase && !wantsUpperCase && !wantsNumbers && !wantsSpecialChars) {
    window.alert("You must select at least one character type! Please try again.");
    var string = generatePasswordContent();
    return string;
  }

  if (wantsLowerCase){
    options = options.concat(lowerCase);
  }

  if (wantsUpperCase){
    options = options.concat(upperCase);
  }

  if (wantsNumbers){
    options = options.concat(numbers);
  }

  if (wantsSpecialChars){
    options = options.concat(specialChars);
  }
  
  // Creating and verifying the password meets length requirements. Value received from function call.
  var passwordLength = generatePasswordLength();
  var password = '';

  // This for loop generates the random password
  for (let count = 0; count < passwordLength; count++) {
    index = Math.floor(Math.random() * options.length);
    randomChar = options[index]
    password = password.concat(randomChar);
  }
  return password;
};

 function generatePasswordLength() {
  var length = window.prompt("How long would you like your password to be? Please choose between a length of 8 to 128 characters.");
  length = parseInt(length);
  
  // Here we do a recursive call, again with the variable 'number' to hold the value when we reach the base case 
  if ((length < 8) || (length > 128) || Number.isNaN(length)) {
    window.alert("Password does not meet length requirements. Please try again.");
    var number = generatePasswordLength();
    return number;
  }

  else {
    window.alert("You have selected a password length of " + length + " characters.");
    return length;
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
