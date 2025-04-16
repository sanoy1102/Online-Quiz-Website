// Get elements
const signUpBtn = document.querySelector('#btn1 button');
const logInBtn = document.querySelector('#btn2 button');

const signUpModal = document.getElementById('signup-modal');
const logInModal = document.getElementById('login-modal');

const closeBtns = document.querySelectorAll('.close-btn');

// Open Sign Up Modal
signUpBtn.addEventListener('click', () => {
  signUpModal.style.display = 'block';
});

// Open Log In Modal
logInBtn.addEventListener('click', () => {
  logInModal.style.display = 'block';
});

// Close modals when clicking on close buttons (×)
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    signUpModal.style.display = 'none';
    logInModal.style.display = 'none';
  });
});

// Close modals when clicking outside of modal content
window.addEventListener('click', (e) => {
  if (e.target === signUpModal) {
    signUpModal.style.display = 'none';
  }
  if (e.target === logInModal) {
    logInModal.style.display = 'none';
  }
});

// carousel 

// Same JavaScript as previous solution
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const slides = container.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    const gap = 15;
    let currentPosition = 0;
    const containerWidth = container.offsetWidth;
    
    function getVisibleSlidesCount() {
      return Math.floor(containerWidth / (slideWidth + gap));
    }
    
    function getMaxPosition() {
      const visibleSlides = getVisibleSlidesCount();
      const totalSlidesWidth = slides.length * (slideWidth + gap);
      const maxScroll = totalSlidesWidth - containerWidth;
      return -maxScroll;
    }
    
    function updateCarousel() {
      carousel.style.transform = `translateX(${currentPosition}px)`;
      prevBtn.disabled = currentPosition >= 0;
      nextBtn.disabled = currentPosition <= getMaxPosition();
    }
    
    nextBtn.addEventListener('click', function() {
      const moveBy = getVisibleSlidesCount() * (slideWidth + gap);
      currentPosition = Math.max(currentPosition - moveBy, getMaxPosition());
      updateCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
      const moveBy = getVisibleSlidesCount() * (slideWidth + gap);
      currentPosition = Math.min(currentPosition + moveBy, 0);
      updateCarousel();
    });

    function handleResize() {
      currentPosition = Math.max(Math.min(currentPosition, 0), getMaxPosition());
      updateCarousel();
    }
    
    window.addEventListener('resize', handleResize);
    updateCarousel();
  });
});