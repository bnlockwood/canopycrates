/* ============================================
   Canopy Crates - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar scroll behavior ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile navigation toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Fade-in on scroll (Intersection Observer) ---
  const fadeElements = document.querySelectorAll(
    '.crate-card, .vendor-card, .step, .about-content, .about-image, .contact-info, .contact-form-wrapper'
  );

  fadeElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeElements.forEach(el => observer.observe(el));

  // --- Contact form handling ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });

      // Display confirmation
      const wrapper = contactForm.parentElement;
      wrapper.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; margin-bottom: 16px;">&#10003;</div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: var(--color-primary); margin-bottom: 12px;">
            Thank You, ${data.name || 'there'}!
          </h3>
          <p style="color: var(--color-text-light); margin-bottom: 8px;">
            Your order enquiry for the <strong>${getCrateName(data.crate)}</strong> has been received.
          </p>
          <p style="color: var(--color-text-light); margin-bottom: 24px;">
            We'll be in touch shortly to confirm your order and pricing.
          </p>
          <p style="font-size: 0.85rem; color: var(--color-text-light);">
            Delivering to: ${data.accommodation || 'your accommodation'}
          </p>
        </div>
      `;
    });
  }

  // --- Set minimum date on date input ---
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // --- Active nav link highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
});

function getCrateName(value) {
  const names = {
    morning: 'The Morning Crate',
    sundowner: 'The Sundowner Crate',
    regional: 'Regional Goodies',
    celebration: 'The Celebration Crate'
  };
  return names[value] || 'Selected Crate';
}
