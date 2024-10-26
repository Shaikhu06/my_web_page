// Wait until the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Example 1: Basic Form Validation for the Registration Form
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        // Check if the name field is empty
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            event.preventDefault(); // Prevent form from submitting
            return;
        }

        // Basic email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            event.preventDefault(); // Prevent form from submitting
            return;
        }
    });

    // Example 2: Toggle additional information on About page
    const toggleButton = document.getElementById("toggle-info");
    const extraInfo = document.getElementById("extra-info");
    
    if (toggleButton && extraInfo) {
        toggleButton.addEventListener("click", function () {
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                toggleButton.textContent = "Hide Info";
            } else {
                extraInfo.style.display = "none";
                toggleButton.textContent = "Show More Info";
            }
        });
    }
    
    // Example 3: Add smooth scrolling to all internal page links
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});