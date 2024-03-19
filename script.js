document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    // Simulate registration process (can be replaced with actual backend logic)
    // After successful registration, load content
    var content = `
        <p>Welcome, ${fullName}!</p>
        <p>Start exploring and connecting with friends.</p>
        <!-- Add more dynamic content here -->
    `;
    document.getElementById("content").innerHTML = content;
    document.getElementById("content").style.display = "block";
});