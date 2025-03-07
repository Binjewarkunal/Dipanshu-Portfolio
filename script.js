// Loader Animation
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  
  // Carousel Functionality
  let currentIndex = 0;
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  
  document.querySelector(".next").addEventListener("click", () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
  
  document.querySelector(".prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  });
  
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }
  
  // Auto Carousel
  setInterval(() => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 5000);
  
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("white-theme");
    if (body.classList.contains("white-theme")) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });