(function () {
  "use strict";

  /**
   * Cache frequently used elements
   */
  const header = document.querySelector('#header');
  const headerToggleBtn = document.querySelector('.header-toggle');
  const navmenu = document.querySelector('#navmenu');
  const navmenuLinks = document.querySelectorAll('#navmenu a');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const typedElement = document.querySelector('.typed');
  const skillsAnimations = document.querySelectorAll('.skills-animation');
  const isotopeLayouts = document.querySelectorAll('.isotope-layout');

  /**
   * Header toggle
   */
  function headerToggle() {
    header.classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  navmenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && header.classList.contains('header-show')) {
      headerToggle();
    }
  });

  /**
   * Scroll top button
   */
  function toggleScrollTop() {
    if (scrollTopBtn) {
      window.scrollY > 100
        ? scrollTopBtn.classList.add('active')
        : scrollTopBtn.classList.remove('active');
    }
  }

  scrollTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', throttle(toggleScrollTop, 50));
  window.addEventListener('load', toggleScrollTop);

  /**
   * Animation on scroll (AOS) initialization
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }

  /**
   * Typed.js initialization
   */
  if (typedElement) {
    const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Pure Counter initialization
   */
  new PureCounter();

  /**
   * Animate skills items on reveal using IntersectionObserver
   */
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('.progress .progress-bar')
            .forEach((bar) => {
              bar.style.width = bar.getAttribute('aria-valuenow') + '%';
            });
        }
      });
    },
    { threshold: 0.8 }
  );

  skillsAnimations.forEach((item) => skillsObserver.observe(item));

  /**
   * GLightbox initialization
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

  /**
   * Isotope layout and filters
   */
  isotopeLayouts.forEach((isotopeItem) => {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
      const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filterItem) => {
        filterItem.addEventListener('click', () => {
          isotopeItem
            .querySelector('.isotope-filters .filter-active')
            .classList.remove('filter-active');
          filterItem.classList.add('filter-active');
          initIsotope.arrange({
            filter: filterItem.getAttribute('data-filter'),
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        });
      });
    });
  });

  /**
   * Swiper initialization
   */
  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener('load', initSwiper);

  /**
   * Correct scrolling position for hash links on page load
   */
  function handleHashLinkScroll() {
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      setTimeout(() => {
        const section = document.querySelector(hash);
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth',
        });
      }, 100);
    }
  }
  window.addEventListener('load', handleHashLinkScroll);

  /**
   * Navmenu scrollspy
   */
  function navmenuScrollspy() {
    navmenuLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom > 200) {
        navmenuLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', throttle(navmenuScrollspy, 50));
  window.addEventListener('load', navmenuScrollspy);

  /**
   * Throttle function to optimize scroll listeners
   */
  function throttle(func, limit = 50) {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
})();
