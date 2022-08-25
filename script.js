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

const anchors = Array.from(document.querySelectorAll('a'))

anchors.forEach(a => {
  a.addEventListener('click', function(e) {
    anchors.forEach(a => {
      a.classList.remove('is-active')
    })

    e.currentTarget.classList.add('is-active')
  })  
})

nav_button.addEventListener('click', showMobileNav);