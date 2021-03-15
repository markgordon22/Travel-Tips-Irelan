document.getElementById("hello-button").addEventListener("click", function(e){
  e.preventDefault();
  
  document.getElementsByClassName("button-text")[0].innerHTML="Looking for a holiday somewhere in Ireland? Let us help you!";
});