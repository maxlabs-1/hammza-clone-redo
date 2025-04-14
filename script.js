
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu functionality
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
  
  // Scroll to top functionality
  const scrollTopButton = document.getElementById('scroll-top');
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Custom mouse pointer functionality
  const mainCursor = document.getElementById('main-cursor');
  const trailingCursor = document.getElementById('trailing-cursor');
  
  const updateMousePosition = (e) => {
    mainCursor.style.left = `${e.clientX}px`;
    mainCursor.style.top = `${e.clientY}px`;
    
    // Add slight delay to trailing cursor
    setTimeout(() => {
      trailingCursor.style.left = `${e.clientX}px`;
      trailingCursor.style.top = `${e.clientY}px`;
    }, 50);
  };
  
  window.addEventListener('mousemove', updateMousePosition);
  
  // Detect hovering over interactive elements
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      mainCursor.classList.add('hovering');
    });
    
    el.addEventListener('mouseleave', () => {
      mainCursor.classList.remove('hovering');
    });
  });

  // Add ripple effect on click
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('cursor-ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  });

  // Add keyframes for ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .cursor-ripple {
      position: fixed;
      border-radius: 50%;
      transform: scale(0);
      background: rgba(255, 255, 255, 0.4);
      pointer-events: none;
      z-index: 9999;
      animation: ripple 0.8s linear;
      width: 10px;
      height: 10px;
    }
  `;
  document.head.appendChild(style);
});
