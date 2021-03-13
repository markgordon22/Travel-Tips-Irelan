

function sendMail(contactform) {
       
        emailjs.send("service_4b99rtc","template_nllrsno",{
        "from_name": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "from": contactForm.from.value,
        "to": contactForm.to.value,
        "message": contactForm.message.value
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

       



