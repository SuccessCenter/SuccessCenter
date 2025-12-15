/**
* Template Name: Learner
* Template URL: https://bootstrapmade.com/learner-bootstrap-course-template/
* Updated: Sep 2025 with custom mobile nav fixes
* Author: BootstrapMade.com + Custom Fixes
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const body = document.querySelector('body');

  function mobileNavToggle() {
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  /**
   * Close mobile nav on link click
   */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();

      const parentDropdown = this.parentElement;
      const submenu = parentDropdown.querySelector('ul');

      // Toggle active class
      parentDropdown.classList.toggle('active');

      // Show/hide submenu
      if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }

      e.stopPropagation();
    });
  });

  /**
/**
 * Preloader سريع
 */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    // إضافة تأثير تلاشي سريع قبل الإزالة
    preloader.style.transition = 'opacity 0.3s ease'; // 0.3 ثانية فقط
    preloader.style.opacity = '0';
    // إزالة العنصر بعد التلاشي
    setTimeout(() => {
      preloader.remove();
    }, 300); // نفس مدة التلاشي
  });
}

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  /*
   * Pricing Toggle
   */
  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');
  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => item.classList.add('yearly-active'));
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => item.classList.remove('yearly-active'));
      }
    });
  });

  /**
   * Active link based on current URL
   */
(function setActiveNav() {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('#navmenu a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');

    // إزالة أي Active قديم
    link.classList.remove('active');

    // إضافة Active فقط إذا كان اسم الصفحة مطابقاً بالكامل
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
})();

})();
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const header = document.querySelector('#header');
  const navMenu = document.querySelector('#navmenu');
  const dropdownItems = document.querySelectorAll('.navmenu .dropdown');

  // فتح / إغلاق القائمة الكاملة
  navToggle.addEventListener('click', function() {
    const isActive = header.classList.toggle('mobile-nav-active');

    this.classList.toggle('bi-list', !isActive);
    this.classList.toggle('bi-x', isActive);

    if (isActive) {
      // افتح القائمة الرئيسية بسلاسة
      navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
    } else {
      // أغلق كل القوائم الفرعية أولًا
      dropdownItems.forEach(item => {
        item.classList.remove('dropdown-active');
        const submenu = item.querySelector('ul');
        submenu.style.maxHeight = '0';
      });
      // ثم أغلق القائمة الرئيسية
      navMenu.style.maxHeight = '0';
    }
  });

  // فتح / إغلاق القوائم الفرعية عند الضغط على أي رابط يحتوي عليها
  dropdownItems.forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('ul');

    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1199) {
        e.preventDefault();

        const isActive = item.classList.contains('dropdown-active');

        // أغلق جميع القوائم الفرعية الأخرى
        dropdownItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('dropdown-active');
            other.querySelector('ul').style.maxHeight = '0';
          }
        });

        // افتح/أغلق القائمة الحالية
        if (isActive) {
          item.classList.remove('dropdown-active');
          submenu.style.maxHeight = '0';
        } else {
          item.classList.add('dropdown-active');
          submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }

        // تحديث ارتفاع القائمة الرئيسية إذا كانت كبيرة
        let totalHeight = Array.from(navMenu.children)
          .reduce((sum, li) => sum + li.offsetHeight, 0);
        navMenu.style.maxHeight = totalHeight + 'px';
      }
    });
  });
});
  // عند التبديل بين اللغات
  const toggle = document.getElementById("lang-toggle");
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      window.location.href = "ar.html"; // عند اختيار AR
    } else {
      window.location.href = "index.html"; // عند اختيار EN
    }
  });
  