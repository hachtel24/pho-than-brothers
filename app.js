document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Hamburger Menu ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Menu Category Filtering ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const menuCards = document.querySelectorAll('.menu-item');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active to current
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          // Quick entry animation
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.4s ease';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Dynamic Opening Hours Status Checker ---
  function updateLocationStatus() {
    const locationCards = document.querySelectorAll('.location-row');
    
    // Get current date & time
    const now = new Date();
    // Get current hour and minute
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeDecimal = currentHour + currentMinute / 60;

    locationCards.forEach(card => {
      const hoursAttr = card.getAttribute('data-hours'); // e.g. "10-21" or "11-21"
      const statusBadge = card.querySelector('.location-status-badge');

      if (!hoursAttr || !statusBadge) return;

      const [startHour, endHour] = hoursAttr.split('-').map(Number);

      // Check if current time falls within operating hours
      const isOpen = currentTimeDecimal >= startHour && currentTimeDecimal < endHour;

      if (isOpen) {
        statusBadge.textContent = 'Open Now';
        statusBadge.className = 'location-status-badge open';
      } else {
        statusBadge.textContent = 'Closed';
        statusBadge.className = 'location-status-badge closed';
      }
    });
  }

  // Initialize and run status checking
  updateLocationStatus();
  // Refresh status every minute
  setInterval(updateLocationStatus, 60000);

  // --- Contact Form Submission Handling ---
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple premium loading transition
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(() => {
        // Hide form and show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Scroll slightly to top of contact container if needed
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    });
  }
});
