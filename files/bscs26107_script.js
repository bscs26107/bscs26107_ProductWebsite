// bscs26107_script.js
// Connected to Home, Products and Contact pages

// 1. Show a welcome pop-up when the page loads
window.addEventListener("load", function () {
    alert("Welcome to Nova Tech!");
});

// 2. Home Page: show the current year in the footer automatically
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 3. Products Page: reveal stock availability only after button click
const stockButtons = document.querySelectorAll(".stock-btn");
stockButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // find the availability <span> inside the same product box
        const productBox = button.closest(".product-box");
        const stockSpan = productBox.querySelector(".stock-value");
        stockSpan.textContent = stockSpan.getAttribute("data-stock");

        // optional: hide the button once availability is shown
        button.style.display = "none";
    });
});

// 4. Contact Page: form validation (required fields) + submit feedback
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stop actual page reload for this demo

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");

        if (nameField.value.trim() === "" || emailField.value.trim() === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you, " + nameField.value + "! Your message has been submitted.");
        contactForm.reset();
    });
}
