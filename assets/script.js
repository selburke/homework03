// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#pwLength")
var uppercaseEl = document.querySelector("#pwUpper");
var lowercaseEl = document.querySelector("#pwLower");
var numberEl = document.querySelector("#pwNumber");
var specialEl = document.querySelector("#pwSpecial");
var generateChar = document.querySelector(".criteria");

var pwLength = 8;
var pwUpper = false;
var pwLower = false;
var pwNumber = false;
var pwSpecial = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Updates Selected Criteria
function updSelect(){
  pwLength = lengthEl.value;
  pwUpper = uppercaseEl.checked;
  pwLower = lowercaseEl.checked;
  pwNumber = numberEl.checked;
  pwSpecial = specialEl.checked;
}

function generatePassword() {
  if(pwLength < 8 || pwLength > 128) {
    alert("Please set a password size between 8 and 128");
    return "";
  }

  if (pwUpper === false && pwLower === false && pwNumber === false && pwSpecial === false){
    alert("Please select at least 1 item.");
  } else if(pwUpper === true && pwLower === true && pwNumber === true && pwSpecial === true) {
    var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
    var optionLength = pwOptions.length;
    var final = "";
    for(var i = 0; i < pwLength; i++) {
      final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
    }
    return final;
  } else if(pwUpper === true && pwLower === true && pwNumber === false && pwSpecial === true) {
    var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]=<>/,.";
    var optionLength = pwOptions.length;
    var final = "";
    for(var i = 0; i < pwLength; i++) {
      final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
    }
    return final;
  } else if(pwUpper === false && pwLower === true && pwNumber === true && pwSpecial === true){
    var pwOptions = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,.";
    var optionLength = pwOptions.length;
    var final = "";
    for(var i = 0; i < pwLength; i++) {
      final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
    }
    return final;
  } else if(pwUpper === true && pwLower === false && pwNumber === true && pwSpecial === true){
    var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
    var optionLength = pwOptions.length;
    var final = "";
    for(var i = 0; i < pwLength; i++) {
      final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
    }
    return final;
  } else if(pwUpper === false && pwLower === true && pwNumber === false && pwSpecial === true) {
    var pwOptions = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.";
    var optionLength = pwOptions.length;
    var final = "";
    for(var i = 0; i < pwLength; i++) {
      final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
    }
    return final;
  } else if(pwUpper === false && pwLower === false && pwNumber === true && pwSpecial === true) {
  var pwOptions = "0123456789!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === true && pwLower === false && pwNumber === false && pwSpecial === true) {
  var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === false && pwLower === false && pwNumber === false && pwSpecial === true) {
  var pwOptions = "!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === false && pwLower === true && pwNumber === true && pwSpecial === true) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === true && pwLower === false && pwNumber === true && pwSpecial === true) {
  var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === true && pwNumber === true && pwSpecial === false){
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === false && pwLower === false && pwNumber === true && pwSpecial === false) {
  var pwOptions = "0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === true && pwLower === false && pwNumber === true && pwSpecial === false) {
  var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === false && pwLower === true && pwNumber === true && pwSpecial === false) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyz0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === false && pwNumber === false && pwSpecial === false) {
  var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === true && pwNumber === true && pwSpecial === false) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === true && pwNumber === false && pwSpecial === true) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === false && pwNumber === true && pwSpecial === true) {
  var pwOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === true && pwLower === true && pwNumber === false && pwSpecial === false) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}else if(pwUpper === true && pwLower === true && pwNumber === false && pwSpecial === true) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]=<>/,.";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
} else if(pwUpper === true && pwLower === true && pwNumber === true && pwSpecial === false) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}
else if(pwUpper === false && pwLower === true && pwNumber === false && pwSpecial === false) {
  var pwOptions = "abcdefghijklmnopqrstuvwxyz";
  var optionLength = pwOptions.length;
  var final = "";
  for(var i = 0; i < pwLength; i++) {
    final = final + pwOptions.charAt(Math.floor(Math.random() * optionLength));
  }
  return final;
}
}

//When criteria checked, will update which criteria has been selected
generateChar.addEventListener('click', updSelect);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
