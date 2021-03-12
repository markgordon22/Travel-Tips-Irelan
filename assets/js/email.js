function sendMail(contactForm) {
    emailjs.send("Travel Tips Ireland", "gmail", {
        
    })
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
    return false;  // stops page reloading straight away
}





