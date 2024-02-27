// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//variables are references/containers that allows you to manipulate what you are referencing. Once you declare a variable, you don't have to again in the code. Line 8 means we assigned the generated password to the property value of the textArea element in the document referenced by the variable passwordText

// Add event listener to generate button
// add event listener means the button is waiting for an event, in this situation, the click, to write the password. 
generateBtn.addEventListener("click", writePassword);
// var hello = "taco"

// var goodbye = "goobye"

// if(hello){
//   console.log("hello")
// }
// if(4 > 9 && 5 < 10){
//   console.log("goobye")
// }

//functions allows you to call code with a particular task repeatedly
//we called the function generatePassword on line 6 and now we are defining generatePassword
//generatePassword definition
function generatePassword() {
  var password = ''
  var possiblecharacters = []
  var passwordLength = parseInt(prompt("What is the length requirement of the password (between 8-128 characters)"))
// parseInt - we are turning whatever someone is writing in the prompt, which is string, into a number and so we can do a mathematic operation (line 35) with the number
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Your password length requirement is not valid")
    return generatePassword()
  }
  var passwordUppercase = confirm("Does the password require an uppercase letter?")
  var passwordLowercase = confirm("Does the password require a lowercase letter?")
  var passwordNumber = confirm("Does the password require a number?")
  var passwordSpecialCharacter = confirm("Does the password require a special character?")
// prompt returns a string but the confirm returns a boolean (true or false). 
  var UppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var Lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var SpecialCharacter = [" !","#","$","%","&","'","(",")","*","+",",","-",".","/",";",":","<","=",">","?","@","[","\\","^","_","`","{","|","}","~"] 


  // i<passwordLength - as long as this part is true, this for loop will continue - in this case, as long as the password length is greater than 0, the loop will continue. i++ means moving the i, which we have defined as 0, up by 1. (i=i+1)
  // var password = ""
  
  // for (var i=0; i<passwordLength;i++) {
  //   var index=Math.random(UppercaseLetters)
  //   password = password + UppercaseLetters[i]
  // }

  // concatenating the list of criteria within if statements - if the criteria met, then it goes on. If not, then its fine because the criteria is optional, besides the length of the password. Below we are saying that the criteria above, upppercase, lowercase, etc. be added within the list of possible characters if the person selects true
  if (passwordUppercase == true) {
    possiblecharacters = possiblecharacters.concat(UppercaseLetters)
  }
    
   if (passwordLowercase == true) {
    possiblecharacters = possiblecharacters.concat(Lowercase)
  }

  if (passwordNumber == true) {
    possiblecharacters = possiblecharacters.concat(Number)
  }

  if (passwordSpecialCharacter == true) {
    possiblecharacters = possiblecharacters.concat(SpecialCharacter)
  }
  //on each loop, I would like to create a random number and from that number get a character from the list of defined characters above i.e. Lowercase so I will add it to the password string. We are using -1 to find a number that is not higher than the length of possible characters array. 
  for (var i=0; i<passwordLength; i++) {
    var index=Math.floor(Math.random()*(possiblecharacters.length -1))
    password = password + possiblecharacters[index]
  }
  //the length of the possible list of characters minus one because the index of possible numbers starts at 0 and the math random function returns numbers in decimals less than 1 so we need to multiply it by the maximum number index of possible characters. We are using Math.floor because we need to round out the decimal
  //parenthesis - calling a function. brackets - accessing an element in an array. Braces - clause, a group of logical statements i.e. if/else statements
  return password

}

  // if (passwordUppercase) {
  //   for (var i=0; i<UppercaseLetters.length;i++) {
  //     possiblecharacters.push(UppercaseLetters[i])
  //   }
  // }

// typing out steps to create the password generator from user perspective//
//user clicks button 
//a prompt is generated 
//a prompt asks for password criteria
//a prompt asks for password length
//validate password length between 8-128 characters
  //if password.length is between 8-128 characters
  //then 
//a prompt asks for character types
//a prompt asks for uppercase requirement
  //confirm(Does your password require an uppercase letter?)
//a prompt asks for lowercase requirement
  //confirm(Does your password require an lowercase letter?)
//a prompt asks for number requirement
  //confirm(Does your password require a number letter?)
//a prompt asks for special character requirement
  //confirm(Does your password require a special character letter?)
//user answers prompts
//response is validated
  //if true, else password is generated
  //if false, user must start over
//password is generated
//alert is displayed or displayed on page
  //alert(generatedpassword)

