// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    feather.replace(); // Refresh icons after DOM change
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Form validation for contact forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('border-red-500');
                isValid = false;
            } else {
                input.classList.remove('border-red-500');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            const errorMessage = this.querySelector('.form-error') || document.createElement('p');
            errorMessage.textContent = 'Please fill in all required fields.';
            errorMessage.classList.add('form-error', 'text-red-500', 'text-sm', 'mt-2');
            
            if (!this.querySelector('.form-error')) {
                this.appendChild(errorMessage);
            }
        }
    });
});

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === 'index.html' && linkHref === '/') ||
        (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('text-indigo-600', 'font-medium');
        link.classList.remove('hover:text-indigo-600');
    }
});

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});


document.addEventListener("DOMContentLoaded", () => {
const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
    video.play();
    });
    video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // optional: resets video when you stop hovering
    });
});
});
  
//Video slideshow logic
document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".my-slides");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let autoSlide;

  function showSlide(newIndex, direction = "next") {
    const currentSlide = slides[slideIndex];
    const newSlide = slides[newIndex];

    // reset classes
    slides.forEach(slide => {
      slide.classList.remove("active", "exit-left", "exit-right");
    });

    // outgoing slide
    if (direction === "next") {
      currentSlide.classList.add("exit-left");
    } else {
      currentSlide.classList.add("exit-right");
    }

    // incoming slide
    newSlide.classList.add("active");

    // reset video on old slide
    const oldVideo = currentSlide.querySelector("video");
    if (oldVideo) {
      oldVideo.pause();
      oldVideo.currentTime = 0;
    }

    // play video on new slide
    const newVideo = newSlide.querySelector("video");
    if (newVideo) {
      newVideo.muted = true;
      newVideo.play();
    }

    // update dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[newIndex]?.classList.add("active");

    slideIndex = newIndex;
  }

  function nextSlide() {
    const nextIndex = (slideIndex + 1) % slides.length;
    showSlide(nextIndex, "next");
  }

  function prevSlide() {
    const prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex, "prev");
  }

  // Auto-slide
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 10000); // 10s
  }
  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Controls
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i, i > slideIndex ? "next" : "prev");
      resetAutoSlide();
    })
  );

  // Initialize
  slides[slideIndex].classList.add("active");
  dots[slideIndex]?.classList.add("active");
  startAutoSlide();
});
