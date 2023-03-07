//Nav
var navItems = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    for (var j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove("active-nav-item");
    }
    this.classList.add("active-nav-item");
  });
}

// Hero
let indexHero = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("home-hero")[0];
  let bgSlide = ["/assets/bg-hero-2.jpg", "/assets/bg-hero-1.jpg"];
  slides.style.removeProperty("backgroundImage");
  slides.style.backgroundImage = `url(${bgSlide[indexHero]})`;

  if (indexHero < bgSlide.length - 1) {
    indexHero++;
  } else {
    indexHero = 0;
  }

  setTimeout(showSlides, 3000);
}

// Carousel
let indexCarousel = 0;
showCarousel();

function showCarousel() {
  let carousel = document.getElementsByClassName("carousel-img");
  for (let i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  indexCarousel++;
  if (indexCarousel > carousel.length - 1) {
    indexCarousel = 0;
  }
  carousel[indexCarousel].style.display = "block";
  setTimeout(showCarousel, 3000);
}

//Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  console.log(e + "click");
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const hobby = document.getElementById("hobby").value;

  if (name === "" || email === "" || hobby === "") {
    alert("Please fill all the fields");
  } else {
    alert(
      `Thank you for contacting us. We will get back to you as soon as possible.`
    );
  }
  form.reset();
  return false;
});
