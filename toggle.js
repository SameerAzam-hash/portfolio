// =======Toggle Icon Navbar===================//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log('Menu icon toggled');
};

// ==================Scroll Section====================//
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Handle scroll-based navigation highlighting
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header toggle
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Footer animation
    let footer = document.querySelector('footer');
    if (footer) {
        footer.classList.toggle(
            'show-animate',
            window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
        );
    }
};

// Handle click-based navigation highlighting
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navlinks.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

// =======Toggle Contact Section===================//
let contactToggleBtn = document.querySelector('#contact-toggle-btn'); // Button to toggle contact section
let contactSection = document.querySelector('#contact'); // Contact section

if (contactToggleBtn && contactSection) {
    contactToggleBtn.onclick = () => {
        contactSection.classList.toggle('active');
        console.log('Contact section toggled');
    };
} else {
    console.error('Contact toggle button or contact section not found');
}
