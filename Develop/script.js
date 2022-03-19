// vars
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=','+',',','.','[',']','{','}','/','~', '"'];
var passArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//functions
var generatePassword = function () {
  var passLength = prompt("Please set password length. You must choose between 8 and 128 characters.");

  if (passLength <8 || passLength > 128) {
    prompt("Invalid number. Please choose a length between 8 and 128 characters.");
  }

  var numCheck = confirm("Would you like numbers in your password?")
    if (numCheck) {
      passArray = passArray.concat(number);
    }

  var upperCheck = confirm("Would you like uppercase letters in your password?");
    if (upperCheck) {
      passArray = passArray.concat(upper);
    }

  var lowerCheck = confirm("Would you like lowercase letters in your password?");
  if (lowerCheck) {
    passArray = passArray.concat(lower);
  }

  var specialCheck = confirm("Would you like special characters in your password?");
  if (specialCheck) {
    passArray = passArray.concat(special);
  }

  var checkResult = numCheck + upperCheck + lowerCheck + specialCheck;
    if (checkResult === 0) {
      alert("You must choose to include at least 1 option.")
      return generatePassword();
    }

    console.log(passArray)

    var randomizePassArray = function(passArray) {
      var shuffledArray = passArray.sort((a, b) => 0.5 - Math.random());
      console.log(shuffledArray);
    }

    randomizePassArray(passArray);


    var addChars = function(passArray, passLength) {
      completePass = [];

      if (completePass.length < passArray.length) {
        for (i=0; i<passLength; i++){
          completePass.push(passArray[i])
        }
        completePass = completePass.join("");
      }
    
    }

    addChars(passArray, passLength);

    return completePass;

}


// Write password to the #password input
function writePassword(completePass) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(completePass);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
