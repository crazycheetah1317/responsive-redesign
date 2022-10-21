// Automatic Slider
var timeOut = 3000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
  timeOut = timeOut - 30;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 30);
}

// Manual Slider
function prevSlide() {

  timeOut = 3000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  if (slideIndex <= 0) {
    slideIndex = 3
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {

  timeOut = 3000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}