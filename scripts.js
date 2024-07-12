// Initialize EmailJS
(function() {
    emailjs.init("rHldNFmNyOX_kMadB");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send("opemipokareem5", "template_wbcsxxn", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});