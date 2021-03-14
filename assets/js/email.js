 function sendMail() {
    var params = {
        from_name: "Travel Tips Ireland",
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        from: "markgordon97@gmail.com",
        phone_number: document.getElementById("telephone-number").value,
        arrival: document.getElementById("datearrival").value,
        to: document.getElementById("email-address").value,
        message: document.getElementById("msg").value
    }
    emailjs.send("service_4b99rtc","template_nllrsno",params)
    .then(
        // Alert sent if email successful
        function(response) {
            alert("Your email has been sent, we will be in touch as soon as possible");
            // Page reloads after user clicks "ok" on alert box
            // Found on Stack Overflow, linked in README
            //window.location.reload(true);
        },
        // Alert sent if email failed
        function(error) {
            alert("Your email was not sent, please try again");
            //window.location.reload(true);
        }
    );
    return false;  // To block from loading a new page
}


       



