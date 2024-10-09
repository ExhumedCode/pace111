console.log("Script.js is loading");

console.log("Script is running");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded event fired");
  
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

  const totalSlides = 13; // Total number of slides
  let currentSlide = 1;

  function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (n + totalSlides) % totalSlides || totalSlides;
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index + 1 === currentSlide);
    });
  }

  function createSlides() {
    const container = document.getElementById("slideshow-container");
    for (let i = 2; i <= 14; i++) { // Start from 2, end at 14
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `<img src="../images/NVUnit2/NVUnit2.${i.toString().padStart(3, "0")}.jpeg" alt="Slide ${i-1}">`;
      container.appendChild(slide);
    }
    
    // Add navigation buttons
    const navButtons = document.createElement("div");
    navButtons.className = "navigation-buttons";
    navButtons.innerHTML = `
      <button id="prevSlide">Previous</button>
      <button id="nextSlide">Next</button>
    `;
    container.appendChild(navButtons);

    // Add fullscreen button
    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.id = "fullscreen-btn";
    fullscreenBtn.textContent = "Fullscreen";
    container.appendChild(fullscreenBtn);

    showSlide(1);
  }

  createSlides();

  document.getElementById('prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));
  document.getElementById('nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));

  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const container = document.getElementById("slideshow-container");
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  });
});
