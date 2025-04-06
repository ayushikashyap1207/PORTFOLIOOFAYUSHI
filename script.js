
document.addEventListener('DOMContentLoaded', function() {
    
    lucide.createIcons();
  
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbarLinks = document.getElementById('navbar-links');
  
    if (mobileMenuToggle && navbarLinks) {
      mobileMenuToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
      });
    }
  
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navbarLinks.classList.contains('active')) {
          navbarLinks.classList.remove('active');
        }
      });
    });
  
    
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    });
  
    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
   
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = '0%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 100);
          skillObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    skillBars.forEach(bar => {
      
      const width = bar.style.width;
      bar.style.width = '0%';
     
      skillObserver.observe(bar);
    });
  
  
    const elementsToAnimate = document.querySelectorAll('.about-subtitle, .skill, .project-card, .info-card, .timeline-item');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  
    elementsToAnimate.forEach(element => {
      animationObserver.observe(element);
    });
  
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
     
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
       
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields.');
          return;
        }
        
    
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
      
        setTimeout(() => {
       
          alert('Message sent successfully! We will get back to you soon.');
          
       
          contactForm.reset();
          
        
          submitButton.textContent = 'Send Message';
          submitButton.disabled = false;
        }, 1500);
      });
    }
  
    
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  });
  