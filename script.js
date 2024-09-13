// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuToggle.classList.toggle('toggle');
});

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('open');
        
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

// Contact Form Submission to Discord Webhook
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Create payload
    const payload = {
        content: null,
        embeds: [
            {
                title: "New Contact Form Submission",
                color: 5814783,
                fields: [
                    {
                        name: "Name",
                        value: name || "N/A",
                        inline: true
                    },
                    {
                        name: "Email",
                        value: email || "N/A",
                        inline: true
                    },
                    {
                        name: "Message",
                        value: message || "N/A"
                    }
                ],
                timestamp: new Date()
            }
        ]
    };

    // Send to Discord webhook
    fetch('https://discord.com/api/webhooks/1284182483079794750/Nd-z7ntHC1GPSRUeiTxhqA2U3moTqC1dDDxDWFzT9MKWv4bfnYaW_vL53N6pbrab2KTK', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});



// Smooth Scrolling
const navLinksScroll = document.querySelectorAll('.nav-links a');

navLinksScroll.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}
