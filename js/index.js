/* ============================================================
   FATAN TEHNIK ELEKTRO — Homepage JavaScript
   js/index.js
   ============================================================ */

'use strict';

/* ─── Sticky Navbar ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── Hamburger / Mobile Menu ─── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

// Close mobile menu on link click
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ─── Active Nav Link ─── */
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(link => {
  // Remove all active first
  link.classList.remove('active');
  // Mark the current page
  const href = link.getAttribute('href');
  if (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html') || currentPath.endsWith('/'))) {
    link.classList.add('active');
  }
});

/* ─── Scroll Reveal (IntersectionObserver) ─── */
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Unobserve once revealed to save resources
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ─── Counter Animation ─── */
function animateCounter(el, target, suffix, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start) + suffix;
  }, 16);
}

const statNums = document.querySelectorAll('.stat-num[data-target]');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNums.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, target, suffix);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const statsSection = document.getElementById('statistics');
if (statsSection) statsObserver.observe(statsSection);

/* ─── Back to Top ─── */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── Project Card Hover: ensure overlay works on touch ─── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('touchstart', () => {
    // Toggle active class on touch for mobile
    card.classList.toggle('touch-active');
  }, { passive: true });
});
