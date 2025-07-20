document.getElementById('loginForm').onsubmit = async function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of validating credentials (you should replace this with actual validation logic)
    if (username === "student" && password === "password123") {
        alert("Login successful!");
        // Redirect to the canteen dashboard or main page
    } else {
        document.getElementById('error-message').innerText = "Invalid username or password.";
    }

    // In a real application, you would send a request to a backend service for validation.
};