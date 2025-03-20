import React, { useEffect } from 'react';
// import AOS from 'aos';
// import GLightbox from 'glightbox';
// import Swiper from 'swiper';
// import Isotope from 'isotope-layout';
// import imagesLoaded from 'imagesloaded';

const Main = () => {
  useEffect(() => {
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    const toggleScrolled = () => {
      const body = document.querySelector('body');
      const header = document.querySelector('#header');
      if (!header?.classList.contains('scroll-up-sticky') &&
          !header?.classList.contains('sticky-top') &&
          !header?.classList.contains('fixed-top')) return;

      window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToggle = () => {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    };

    mobileNavToggleBtn?.addEventListener('click', mobileNavToggle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    const aosInit = () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    };

    window.addEventListener('load', aosInit);

    /**
     * Initiate glightbox
     */
    GLightbox({
      selector: '.glightbox',
    });

    /**
     * Init swiper sliders
     */
    const initSwiper = () => {
      document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
        const config = JSON.parse(
          swiperElement.querySelector('.swiper-config').innerHTML.trim()
        );

        new Swiper(swiperElement, config);
      });
    };

    window.addEventListener('load', initSwiper);

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
        filters.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        });
      });
    });

    return () => {
      // Cleanup event listeners on component unmount
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn?.removeEventListener('click', mobileNavToggle);
      document.removeEventListener('scroll', toggleScrollTop);
      window.removeEventListener('load', toggleScrollTop);
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default Main;