document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let isValid = true;

    // Clear previous error messages
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('email').classList.remove('is-invalid');
    document.getElementById('password').classList.remove('is-invalid');
    document.getElementById('repassword').classList.remove('is-invalid');

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name').classList.add('is-invalid');
        isValid = false;
    }

    // Validate email or mobile number
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const mobilePattern = /^[0-9]{10,15}$/;
    if (!emailPattern.test(email) && !mobilePattern.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password').classList.add('is-invalid');
        isValid = false;
    }

    // Validate re-entered password
    const repassword = document.getElementById('repassword').value;
    if (password !== repassword) {
        document.getElementById('repassword').classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        // Form is valid, you can submit it or perform other actions
        alert('Form submitted successfully!');
    }
});
