'use strict';

function toggleBlock(block) {
  const content = block.getElementsByClassName('list__content')[0];

  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}

let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

const manImage = document.getElementById('man-image');
const container = manImage.parentNode;

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = Math.min(Math.max(mouseX - containerRect.left - 100, 0), containerWidth);
  const offsetY = Math.min(Math.max(mouseY - containerRect.top - 100, 0), containerHeight);

  manImage.style.transition = 'transform 1.5s ease';
  manImage.style.transform = `translate(${offsetX / 5}px, ${offsetY / 5}px)`;
}
