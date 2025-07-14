document.addEventListener("DOMContentLoaded", function () {
  // 1. TYPED.JS - for the typing animation
  // Typed.js for home page auto-type effect
  if (document.querySelector('.auto-type')) {
    new Typed('.auto-type', {
      strings: [
        'Full-Stack Development',
        'Backend Development',
        'MERN Stack',
        'Problem Solving'
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
  }

  // 2. PARTICLES.JS - for the background animation
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  // 3. AOS (ANIMATE ON SCROLL) INITIALIZATION
  AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
  });

  // 4. HAMBURGER MENU TOGGLE for mobile
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // 5. ACTIVE NAV LINK ON SCROLL
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") == "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", navHighlighter);

  // 6. HEADER STYLE ON SCROLL
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// ====================================================================== //
// REPLACE THE OLD PROJECT FILTER SCRIPT IN SCRIPT.JS WITH THIS NEW ONE
// ====================================================================== //

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Manage active state
                document.querySelector(".filter-btn.active").classList.remove("active");
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                projectCards.forEach(card => {
                    if (filterValue === "all" || card.classList.contains(filterValue)) {
                        card.classList.remove("hide");
                    } else {
                        card.classList.add("hide");
                    }
                });
            });
        });
    }
});

// Project Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectsGrid = document.querySelector('.projects-grid-container');

function updateFewProjectsClass() {
  const visibleCards = Array.from(projectCards).filter(card => card.style.display !== 'none');
  if (visibleCards.length <= 2) {
    projectsGrid.classList.add('few-projects');
  } else {
    projectsGrid.classList.remove('few-projects');
  }
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        card.style.display = card.classList.contains(filter) ? '' : 'none';
      }
    });
    updateFewProjectsClass();
  });
});
// Initial call in case of default filter
updateFewProjectsClass();

// Clear contact form after submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    setTimeout(() => {
      contactForm.reset();
    }, 100); // Give time for the form to submit before clearing
  });
}