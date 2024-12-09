const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;

    const response = await fetch('/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (response.ok) {
        alert('Email sent successfully!');
    } else {
        alert('Failed to send email. Please try again.');
    }
});