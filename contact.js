(function () {
    emailjs.init("r-J6ZmWcVitGBrEqp");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userAffiliation = document.getElementById("relation").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userInterest = document.getElementById("interest").value;
    let userSubject = document.getElementById("subject").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_affiliation: userAffiliation,
            email_to: userEmail,
            from_number: userPhone,
            from_interest: userInterest,
            from_subject: userSubject,
            message: userMessage
        };

        emailjs.send('service_2hy6l8j', 'template_fc5cmnu', contactParams).then(function (res) {
          document.getElementById("name").value="";
          document.getElementById("relation").value="";
          document.getElementById("email").value="";
          document.getElementById("phone").value="";
         document.getElementById("interest").value="";
          document.getElementById("subject").value="";
          document.getElementById("message").value="";
          alert("Success!"+ res.status);

        })
}
