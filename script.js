document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth scroll for navigation links ---
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Update current year in footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic contact form handling (for GitHub Pages, you'll need a service like Formspree or Netlify Forms) ---
    // This is a placeholder. For a static site, you need a backend or a third-party service.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Example: Using Formspree.io - Replace YOUR_FORM_ID with your actual Formspree ID
            // const formData = new FormData(contactForm);
            // fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // }).then(response => {
            //     if (response.ok) {
            //         contactForm.reset();
            //         alert('תודה! ההודעה נשלחה בהצלחה.');
            //     } else {
            //         response.json().then(data => {
            //             if (Object.hasOwn(data, 'errors')) {
            //                 alert(data["errors"].map(error => error["message"]).join(", "));
            //             } else {
            //                 alert('אופס! הייתה בעיה בשליחת הטופס.');
            //             }
            //         })
            //     }
            // }).catch(error => {
            //     alert('אופס! הייתה בעיה בשליחת הטופס.');
            // });
            alert('טופס זה הוא דמו בלבד. לשליחה אמיתית יש לחבר שירות צד שלישי כמו Formspree.');
            contactForm.reset();
        });
    }

    // --- Active navigation link highlighting on scroll (optional, more advanced) ---
    // You can add code here to detect which section is in view and highlight the corresponding nav link.
    // This often involves Intersection Observer API.

});
