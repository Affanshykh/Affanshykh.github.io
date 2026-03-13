// Set current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Intersection Observer for slide-up animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.slide-up').forEach(element => {
    observer.observe(element);
});

// Typing effect for subtitle
const textToType = "SEO Specialist for SMEs";
const typingElement = document.querySelector('.typing-effect');

if (typingElement) {
    typingElement.textContent = ''; // Clear initial text
    let i = 0;
    
    function typeWriter() {
        if (i < textToType.length) {
            typingElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Add a blinking cursor effect after typing finishes
            typingElement.innerHTML += '<span class="cursor">|</span>';
            const style = document.createElement('style');
            style.textContent = `
                .cursor {
                    animation: blink 1s step-end infinite;
                    margin-left: 2px;
                    color: var(--accent-primary);
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Start typing effect shortly after load
    setTimeout(typeWriter, 800);
}
