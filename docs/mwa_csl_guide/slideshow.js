let slideIndex = 1;

window.addEventListener('load', () => showSlides(1))

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = Array.from(document.getElementsByClassName('slide'));
  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex-1].style.display = 'block';

  const dots = Array.from(document.getElementsByClassName('dot'));
  dots.forEach(dot => dot.className = dot.className.replace(' active', ''))
  dots[slideIndex-1].className += ' active';
} 

  