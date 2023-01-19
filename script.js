// Assignment code here
function randomVal(value_list) {
  return value_list.charAt(Math.floor(Math.random() * value_list.length));
  
  }
  function randomtype(value_list) {
    return value_list[(Math.floor(Math.random() * value_list.length))];
  }
  




function generatePassword(){
  var pasword_builder_str=""
  var lengthofpass=prompt("length of password between 8 and 128", "8");
  if (lengthofpass>128 || lengthofpass<8)
    return "INVALID LENGTH";
  var possible_values=[];
  var hasLowercase=window.confirm("include lowercase");
  var hasUppercase=window.confirm("include uppercase");
  var hasNumeric=window.confirm("include numerics");
  var hasSpecial=window.confirm("include Special Characters");
  if (!(hasLowercase || hasUppercase || hasNumeric || hasSpecial))    // if all of them are true then we get to the else branch
    return "Must include at least one character type";
  else
  {
    if(hasLowercase)
      possible_values.push("abcdefghijklmnopqrstuvwxyz")
    if(hasUppercase)
      possible_values.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(hasNumeric)
      possible_values.push("0123456789")
    if(hasSpecial)
      possible_values.push(" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
    for (let i = 0; i < lengthofpass; i++) {
      pasword_builder_str=pasword_builder_str+(randomVal(randomtype(possible_values)));
    }
      return pasword_builder_str;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
