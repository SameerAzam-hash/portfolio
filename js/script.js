
// =======Toggle Icon Navbar===================//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

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

            sec.classList.add('show-animate');
        }
            
        else{
            sec.classList.remove('show-animate');
        }
        });


            // Add 'active' class to the current link
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        
    // Sticky header toggle
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =============Remove toggle navbar and links on click================//

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>= document.scrollingElement.scrollHeight);

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
