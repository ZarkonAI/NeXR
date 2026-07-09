const menuButton = document.querySelector('.menu-button');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
const cursorGlow = document.querySelector('.cursor-glow');
const magneticItems = document.querySelectorAll('.magnetic');

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

window.addEventListener('mousemove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

magneticItems.forEach((item) => {
  item.addEventListener('mousemove', (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.06}px, ${y * 0.10}px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

// Надёжная прокрутка по якорям: логотип NeXR и кнопка «Наверх» всегда возвращают к началу страницы.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target && targetId !== 'top') return;

    event.preventDefault();
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${targetId}`);
  });
});
