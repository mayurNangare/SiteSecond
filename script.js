    // Toggle hamburger menu visibility
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Open and close hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('close');
    });

    // Close hamburger when clicking outside
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('close');
        }
    });