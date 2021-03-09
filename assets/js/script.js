var elements = document.getElementsByClassName("information")

for(let i=0; i<elements.length; i++) {
elements[i].style.display="none"}

var buttons = document.getElementsByClassName("informationbutton")

for (let q = 0; q<buttons.length; q++) {
buttons[q].addEventListener("click", function(e){
    e.preventDefault()
    
    var informationelement = buttons[q].previousElementSibling
    if(informationelement.style.display === "none")
    {
    informationelement.style.display = "block"
    }
    else {
    informationelement.style.display = "none"
    }
})
}

















