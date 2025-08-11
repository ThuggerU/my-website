// script.js

// ----------------------------------------------------------------------
// Section 1: Handling Navigation for Mobile Devices
// ----------------------------------------------------------------------

// You'll need to add a "menu icon" button to your HTML to use this code.
// For example, within the header tag:
// <div class="menu-icon"><i class='bx bx-menu'></i></div>
//
// Then, you can add an event listener to the button to toggle a class on the navbar.
// const menuIcon = document.querySelector('.menu-icon');
// const navbar = document.querySelector('.navbar');
//
// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });


// ----------------------------------------------------------------------
// Section 2: Adding Active Class to Navigation Links on Scroll
// ----------------------------------------------------------------------

// This is a common feature on single-page websites. It highlights
// the navigation link for the section you are currently viewing.

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// ----------------------------------------------------------------------
// Section 3: The "ShowRight" Animation
// ----------------------------------------------------------------------

// The CSS you provided has animations that are probably meant to be triggered
// by a JavaScript function. The following is a basic example of how you can
// use JavaScript to trigger animations or add classes on scroll.

// We will use a function to add a "show" class to elements
// when they come into the viewport. You would need to add
// these elements to your HTML and CSS.

// Example:
//
// const animatedElements = document.querySelectorAll('.animate');
//
// window.addEventListener('scroll', () => {
//     animatedElements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const viewportHeight = window.innerHeight;
//
//         if (elementTop < viewportHeight - 100) {
//             element.classList.add('show');
//         } else {
//             element.classList.remove('show');
//         }
//     });
// });