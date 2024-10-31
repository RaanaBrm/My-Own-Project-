document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple validation (you can expand this as needed)
        if (name && email && message) {
            // Display success message
            messageDiv.innerHTML = `Thank you, ${name}! Your message has been sent.`;
            messageDiv.style.color = "green"; // Change text color to green
            messageDiv.style.display = "block";

            // Reset form fields
            form.reset();
        } else {
            // Display error message
            messageDiv.innerHTML = "Please fill in all fields.";
            messageDiv.style.color = "red"; // Change text color to red
            messageDiv.style.display = "block";
        }
    });
});
