document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Message:', message);

    alert('Form submitted successfully!');
});
