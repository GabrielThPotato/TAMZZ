const backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Dark Mode and Light Mode Toggle
const themeToggle = document.querySelector("#theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = " Light Mode";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }

});

// WELCOME BUTTON


const welcomeBtn = document.querySelector("#welcome-btn");

welcomeBtn.addEventListener("click", () => {
    alert("Hello this is group 3 and we are a group of students from feuroosevelt we made this for our project. enjoy browsing thankyou!<3. ");
});



// CONTACT FORM VALIDATION


const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {

    // Prevent page from refreshing
    event.preventDefault();

    // Get values from the form
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = " Please fill in all fields.";
        formMessage.style.color = "red";

        return;
    }

    // Form completed successfully
    formMessage.textContent =
        "Message sent successfully! Thank you, " + name + "!";

    formMessage.style.color = "green";

    // Clear all form fields
    contactForm.reset();
});