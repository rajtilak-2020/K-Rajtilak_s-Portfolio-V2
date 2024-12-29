(function () {
  "use strict";

  /**
   * Utility function for debouncing event listeners
   */
  function debounce(func, wait = 100) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  /**
   * DOM Elements
   */
  const headerToggleBtn = document.querySelector('.header-toggle');
  const preloader = document.querySelector('#preloader');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const navmenuLinks = document.querySelectorAll('.navmenu a');
  const typedElement = document.querySelector('.typed');
  const skillsItems = document.querySelectorAll('.skills-animation');

  /**
   * Header toggle functionality
   */
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', () => {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    });
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  navmenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggleBtn.click();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.parentNode.classList.toggle('active');
      dropdown.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    });
  });

  /**
   * Preloader removal
   */
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /**
   * Scroll-to-top button functionality
   */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollToTop = () => {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
          window.scrollTo({ top: currentPosition - currentPosition / 8, behavior: 'auto' });
          requestAnimationFrame(scrollToTop);
        }
      };
      requestAnimationFrame(scrollToTop);
    });

    const toggleScrollTopVisibility = debounce(() => {
      scrollTopBtn.classList.toggle('active', window.scrollY > 100);
    });

    window.addEventListener('scroll', toggleScrollTopVisibility);
  }

  /**
   * Initialize AOS (Animation on Scroll)
   */
  const initializeAOS = () => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  };
  window.addEventListener('load', initializeAOS);

  /**
   * Initialize typed.js
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
   * Initialize Pure Counter
   */
  new PureCounter();

  /**
   * Animate skills progress bars
   */
  skillsItems.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: () => {
        item.querySelectorAll('.progress .progress-bar').forEach((bar) => {
          bar.style.width = bar.getAttribute('aria-valuenow') + '%';
        });
      },
    });
  });

  /**
   * Initialize GLightbox
   */
  GLightbox({ selector: '.glightbox' });

  /**
   * Initialize isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach((layoutElement) => {
    const container = layoutElement.querySelector('.isotope-container');
    if (!container) return;

    const layoutMode = layoutElement.getAttribute('data-layout') || 'masonry';
    const defaultFilter = layoutElement.getAttribute('data-default-filter') || '*';
    const sortBy = layoutElement.getAttribute('data-sort') || 'original-order';

    imagesLoaded(container, () => {
      const isotopeInstance = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode,
        filter: defaultFilter,
        sortBy,
      });

      layoutElement.querySelectorAll('.isotope-filters li').forEach((filterBtn) => {
        filterBtn.addEventListener('click', () => {
          layoutElement.querySelector('.filter-active')?.classList.remove('filter-active');
          filterBtn.classList.add('filter-active');
          isotopeInstance.arrange({ filter: filterBtn.getAttribute('data-filter') });
          initializeAOS();
        });
      });
    });
  });

  /**
   * Initialize Swiper sliders
   */
  const initializeSwipers = () => {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const config = JSON.parse(swiperElement.querySelector('.swiper-config').textContent.trim());
      new Swiper(swiperElement, config);
    });
  };
  window.addEventListener('load', initializeSwipers);

  /**
   * Scroll to hash position on load
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        const scrollMarginTop = parseInt(getComputedStyle(targetSection).scrollMarginTop) || 0;
        window.scrollTo({
          top: targetSection.offsetTop - scrollMarginTop,
          behavior: 'smooth',
        });
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  const updateActiveNavLink = debounce(() => {
    const scrollPosition = window.scrollY + 200;
    navmenuLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition <= section.offsetTop + section.offsetHeight
      ) {
        document.querySelector('.navmenu a.active')?.classList.remove('active');
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  window.addEventListener('scroll', updateActiveNavLink);
})();