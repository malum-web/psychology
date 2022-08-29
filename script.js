let nav_button = document.getElementById('nav_mobile');
let navbar = document.getElementById('navbar');
let buttonUp = document.getElementById("up");
let mainNavLinks = document.querySelectorAll("nav ul li a");


function showMobileNav() {
  if (navbar.classList.contains("active")) {
      navbar.classList.remove('active');
  } else {
      navbar.classList.add('active');
  }
}
// tracking on scroll a
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(a => {
    let section = document.querySelector(a.hash);

    if (
      section.offsetTop - 140 <= fromTop &&
      section.offsetTop - 140 + section.offsetHeight - 140 > fromTop
    ) {
      a.classList.add("is-active");
    } else {
      a.classList.remove("is-active");
    }
  });
});

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
