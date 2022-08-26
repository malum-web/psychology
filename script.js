let nav_button = document.getElementById('nav_mobile');
let navbar = document.getElementById('navbar');
let buttonUp = document.getElementById("up");

const anchors = Array.from(document.querySelectorAll('a'))


// Show navbar on mobile on click 
function showMobileNav() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove('active');
    } else {
        navbar.classList.add('active');
    }
}


// Navbar background color 
anchors.forEach(a => {
  a.addEventListener('click', function(e) {
    anchors.forEach(a => {
      a.classList.remove('is-active')
    })

    e.currentTarget.classList.add('is-active')
  })  
})


// Button up 
function scrollFunction() {
  if (window.scrollY > 20) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

document.addEventListener("scroll", () => {
    scrollFunction();
});

buttonUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    anchors.forEach(a => {
      a.classList.remove('is-active')
    })
});

nav_button.addEventListener('click', showMobileNav);