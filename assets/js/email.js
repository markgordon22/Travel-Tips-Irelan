console.log("hello");
function openbutton (e){
    e.preventDefault();             
    console.log("hello");
    document.getElementById("button-text").style.visibility = "visible";
}
document.getElementById("hello-button").addEventListener("click", openbutton)
document.getElementById("button-text").style.visibility = "hidden";





