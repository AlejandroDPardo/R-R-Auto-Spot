function bookService(serviceName) {
    alert(`You have selected to book: ${serviceName}`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset(); // Reset the form after submission
});
