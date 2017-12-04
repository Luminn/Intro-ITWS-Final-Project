function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  var Valid = true;
  var errorMessage = "";
  focusSet = 0
    
  if (formObj.gameName.value == "") {
    errorMessage += "You must enter a game name\n";
    Valid = false;
    formObj.gameName.focus();
    focusSet = 1;
  }

  if (formObj.gameProper.files.length == 0) {
    errorMessage += "You must upload a game\n";
    Valid = false;
  }

   if (formObj.gameDescription.value == "") {
    errorMessage += "You must enter a description\n";
    Valid = false;
    if (focusSet === 0) {
       formObj.gameDescription.focus();
       focusSet = 1;
    }
  }
    if (errorMessage != "") {
    alert(errorMessage); 
    return false;
  }
  alert("Game Uploaded!");
  return true;
}