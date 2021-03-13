

function sendMail(params) {
    var params = {
        "from_name": contactform.firstname.value,
        "lastname": contactform.lastname.value,
        "from_email": contactform.email.value,
        "phone": contactform.phone.value,
        "from": contactform.from.value,
        "to": contactform.to.value,
        "message": contactform.message.value
    };
        emailjs.send("service_4b99rtc","template_nllrsno",this, params)
    .then(
        // Alert sent if email successful
        function(response) {
            alert("Your email has been sent, we will be in touch as soon as possible");
            // Page reloads after user clicks "ok" on alert box
            // Found on Stack Overflow, linked in README
            window.location.reload(true);
        },
        // Alert sent if email failed
        function(error) {
            alert("Your email was not sent, please try again");
            window.location.reload(true);
        }
    );
    return false;  // To block from loading a new page
}

       



