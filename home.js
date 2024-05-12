
// Function to check if sign-in/sign-up is complete
function isSignInComplete() {
    // Check if sign-in is complete (e.g., user is authenticated)
    // Return true if complete, false otherwise
}

function isSignUpComplete() {
    // Check if sign-up is complete (e.g., user registration is finished)
    // Return true if complete, false otherwise
}

// Redirect function for Home tab
function redirectToHome() {
    if (isSignInComplete() || isSignUpComplete()) {
        window.location.href = "home.html"; // Redirect to home page
    } else {
        // Redirect to sign-in or sign-up page if not complete
        window.location.href = "signin.html"; // Change to your sign-in page URL
    }
}

// Call the redirect function when the Home tab is clicked
document.querySelector('ul.nav-links li:first-child a').addEventListener('click', redirectToHome);
