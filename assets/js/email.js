
 function sendMail(contactForm) {
       
        emailjs.send("service_4b99rtc", "template_nllrsno",{
        from_name: document.getElementById("fromname").value,
        to_email: document.getElementById("toemail").value,
        message: document.getElementById("msg").value,       
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}




