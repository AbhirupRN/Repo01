function openAcc(evt, accountName) {
  var i, tabcontent, tablinks;
  
  /* For display one menu at a time */
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  /* For deactivate a menu once clicked others */
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(accountName).style.display = "block";
  evt.currentTarget.className += " active";
}

 /* Function for display message after form submit*/
function myFunction() {
  alert("The account opening form has been submitted");
}