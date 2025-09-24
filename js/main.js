// Main JS module (ES module style)
const yearEls = document.querySelectorAll('[id^="year"]');
yearEls.forEach(el => el.textContent = new Date().getFullYear());

// Mobile nav toggle (works for each page instance)
function initNavToggle() {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    const nav = document.getElementById('primary-nav');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (nav) {
        const hidden = nav.getAttribute('aria-hidden') === 'false';
        nav.setAttribute('aria-hidden', String(hidden ? 'true' : 'false'));
      }
    });
  });
}

// Simple scroll reveal for elements with .card
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});
  document.querySelectorAll('.card, .project-card').forEach(el => observer.observe(el));
}

// Client-side form validation (contact page)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let errors = [];
    if (name.length < 2) errors.push('Name must be at least 2 characters.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
    if (message.length < 10) errors.push('Message must be at least 10 characters.');
    if (errors.length) {
      status.textContent = errors.join(' ');
      status.style.color = 'crimson';
      status.focus();
      return;
    }
    // Simulate success (in production you'd submit to a server or service)
    status.textContent = 'Thanks — your message looks good! (This demo does not send messages.)';
    status.style.color = 'green';
    form.reset();
  });
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initScrollReveal();
  initContactForm();
});
