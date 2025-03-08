// Loader Animation
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  
  // Swiper Initialization
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
  
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
