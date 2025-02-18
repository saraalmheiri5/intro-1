document.addEventListener('DOMContentLoaded', () => {
    // Contact form logic
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting

        const name = nameField.value;
        const email = emailField.value;
        const message = messageField.value;

        if (name === "" || email === "" || message === "") {
            formStatus.innerHTML = "Please fill out all fields!";
            formStatus.style.color = "red";
        } else {
            formStatus.innerHTML = "Message submitted successfully!";
            formStatus.style.color = "green";

            // Reset the form fields
            contactForm.reset();
        }
    });

   
    const backToTopBtn = document.getElementById('backToTopBtn'); 

    
    function toggleBackToTopButton() {
        
        const scrollHeight = document.documentElement.scrollHeight; 
        const scrollPosition = window.innerHeight + window.scrollY; 

        
        if (scrollPosition >= scrollHeight - 100) {  
            backToTopBtn.style.display = "block"; 
        } else {
            backToTopBtn.style.display = "none"; 
        }
    }

    
    window.addEventListener('scroll', toggleBackToTopButton);

    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
});
