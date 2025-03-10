// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});

// Responsive Navbar (Toggle for Mobile)
const navbar = document.getElementById('navbar');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navbar.style.flexDirection = 'column';
    } else {
        navbar.style.flexDirection = 'row';
    }
});