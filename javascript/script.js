// Change the year in the footer as dynamic

const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// Toggle the mobile navigation tool

const btnEl = document.querySelector('.mobile-nav');
const headerEl = document.querySelector('.header-main');
btnEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Make scroll smooth in al browers

const links = document.querySelectorAll('a:link');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = link.getAttribute('href');
    if (section === '#') {
      window.scrollTo({
        top: 20,
        behavior: 'smooth',
      });
    }

    if (section !== '#' && section.startsWith('#')) {
      const sectionEl = document.querySelector(section);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//toggle the navbar after clicking the link

const navEl = document.querySelectorAll('.navigation-link');
navEl.forEach(function (nav) {
  nav.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });
});

//making the navbar stickly

const hero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const contanier = document.querySelector('.header-container');
    if (entries[0].isIntersecting == false) {
      contanier.classList.add('stickly');
    }

    if (entries[0].isIntersecting) {
      contanier.classList.remove('stickly');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(hero);
