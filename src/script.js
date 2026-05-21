/* ===== SCROLL PROGRESS ===== */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ===== REVEAL ON SCROLL ===== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '-40px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== INSTAGRAM FLOAT ===== */
setTimeout(() => {
  const floatEl = document.getElementById('insta-float');
  if (floatEl) floatEl.classList.add('show');
}, 1500);

/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu  = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ===== NAVBAR SHOW/HIDE ===== */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) { navbar.classList.remove('hide'); return; }
  if (currentScroll > lastScroll && currentScroll > 120) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScroll = currentScroll;
}, { passive: true });

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--gold)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

/* ===== FOOTER YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
