let nav_button = document.getElementById('nav_mobile');
let navbar = document.getElementById('navbar');

// function showMobileNav() {
//     if (navbar.style.top === '-100px') {
//         navbar.style.top = '0px';
//     } else {
//         navbar.style.top = '-100px';
//     }
// }

function showMobileNav() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove('active');
    } else {
        navbar.classList.add('active');
    }
}

nav_button.addEventListener('click', showMobileNav);