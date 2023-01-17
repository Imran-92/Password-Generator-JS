// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let allCharacters=[];
let passwordLength=0;


// Function to prompt user for password options

function getPasswordOptions() {

/* Used while loop to to make sure user choose a length for password between 10-64 characters
and also when choosing length user must only type number and not any other character */

  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)){
    passwordLength=prompt("Please choose length of your password - Length must be between 10-64.");
  }

/* Conditional statements are used to alert the user that user must choose the right length between 10-64 
and also alert user to choose if user need any uppercase,lowercase,numbers or any special character in the password */

  if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert("<<<Please enter a number between 10 and 64 characters>>>");      
  }
  if (confirm("Do you want any upper case characters in your password?")) {     
    allCharacters = allCharacters.concat(upperCasedCharacters);     
  } 
  if (confirm("Do you want any lower case characters in your password?")) {     
    allCharacters = allCharacters.concat(lowerCasedCharacters);     
  } 
  if (confirm("Do you want any special characters in your password?")) {        
    allCharacters = allCharacters.concat(specialCharacters);        
  } 
  if (confirm("Do you want any numbers in your password?")) {                   
    allCharacters = allCharacters.concat(numericCharacters);        
  }

  return allCharacters;

};


// Function for getting a random element from an array
function getRandom() {
  let randomPassword = "";   

// for loop is used so computer get random characters from all arrays 

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)]    
  };

  return randomPassword;       
};

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();     

  let password = getRandom()     
  return password; 

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);