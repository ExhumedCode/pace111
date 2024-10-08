document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      header.classList.toggle('active');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  console.log("script.js loaded");

  const totalSlides = 13; // There are 13 slides in your directory (002 to 014)
  let currentSlide = 1; // Starting from 001.jpeg

  function createUnit2Slides() {
    console.log("createUnit2Slides function called");
    const container = document.getElementById('unit2-container');
    if (container) {
        for (let i = 1; i <= totalSlides; i++) {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.opacity = i === 1 ? '1' : '0';
            const slideNumber = (i + 1).toString().padStart(3, '0'); // Add 1 to match file naming
            slide.innerHTML = `<img src="../images/NVUnit2/NVUnit2.${slideNumber}.jpeg" alt="Slide ${i}">`;
            container.appendChild(slide);
        }
    } else {
        console.log("unit2-container not found");
    }
  }

  function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide - 1].style.opacity = '0';
    currentSlide = ((n - 1 + totalSlides) % totalSlides) + 1;
    slides[currentSlide - 1].style.opacity = '1';
    updateProgress();
    updateSlideCounter();
  }

  function updateProgress() {
    const progress = document.getElementById('progress');
    progress.style.width = `${(currentSlide / totalSlides) * 100}%`;
  }

  function updateSlideCounter() {
    const counter = document.getElementById('slide-counter');
    counter.textContent = `${currentSlide} / ${totalSlides}`;
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  }

  createUnit2Slides();
  
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  const fullscreenButton = document.getElementById('fullscreen-btn');
  
  if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
      nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
  }

  if (fullscreenButton) {
      fullscreenButton.addEventListener('click', toggleFullscreen);
  }

  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
      if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
  });

  console.log("End of script.js reached");
});
