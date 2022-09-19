let nav_button = document.getElementById('nav_mobile');
let navbar = document.getElementById('navbar');
let buttonUp = document.getElementById("up");
let mainNavLinks = document.querySelectorAll("nav ul li a");
let offerButtons = document.querySelectorAll(".offer_button");
let child = document.getElementById('child');
let adult = document.getElementById('adult');
let family = document.getElementById('family');
let fosterFamilies = document.getElementById('foster_families');


// Overflow Elements
document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > document.documentElement.offsetWidth) {
      console.log('Found the worst element ever: ', el);
  }
});

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

// offer change button 
function changeOfferButton(e) {
  for (let i = 0; i < offerButtons.length; i++) {
    const item = offerButtons[i];
    item.classList.remove('button_active');
  }
  e.target.classList.add('button_active');
}

// offer change text

function changeText(item){
  try {
  if (item.textContent === 'Dzieci') {
    child.style.display = "block";
    adult.style.display = "none";
    family.style.display = "none";
    fosterFamilies.style.display = "none";
  } else if (item.textContent === 'Dorośli') {
    adult.style.display = "block";
    child.style.display = "none";
    family.style.display = "none";
    fosterFamilies.style.display = "none";
  } else if (item.textContent === 'Rodziny') {
    adult.style.display = "none";
    child.style.display = "none";
    family.style.display = "block";
    fosterFamilies.style.display = "none";
  } else if (item.textContent === 'Rodziny Zastępcze') {
    adult.style.display = "none";
    child.style.display = "none";
    family.style.display = "none";
    fosterFamilies.style.display = "block";
  } else {
    child.style.display = "none";
    adult.style.display = "none";
    family.style.display = "none";
    fosterFamilies.style.display = "none";
  } }
  catch (error) {
    console.error(error, item);
  }
}

// Button up 
function scrollFunction() {
  if (window.scrollY > 20) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

for (let i = 0; i < offerButtons.length; i++ ) {
  const item = offerButtons[i];
  item.addEventListener('click', changeOfferButton)
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
