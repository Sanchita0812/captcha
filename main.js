document.addEventListener('DOMContentLoaded', function() {
    const captchaElement = document.getElementById('captcha');
    const captchaInput = document.getElementById('captchaInput');
    const submitButton = document.getElementById('submitButton');
    const resultElement = document.getElementById('result');

    let captchaText = '';

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        captchaText = '';
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaElement.textContent = captchaText;
    }

    generateCaptcha();

    submitButton.addEventListener('click', function() {
        if (captchaInput.value === captchaText) {
            resultElement.textContent = 'Captcha Matched!';
            resultElement.style.color = 'green';
            generateCaptcha(); // Generate a new captcha after success
            captchaInput.value = ''; // Clear the input
        } else {
            resultElement.textContent = 'Captcha Not Matched!';
            resultElement.style.color = 'red';
            generateCaptcha(); // Generate a new captcha after failure
            captchaInput.value = ''; // Clear the input
        }
    });
});