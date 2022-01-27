// GSAP JS Plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Sticky Header
const showAnim = gsap.from('.site-header', {
     yPercent: -100,
     paused: true,
     duration: 0.2
}).progress(1);

ScrollTrigger.create({
     start: "top top",
     end: 99999,
     toggleClass: {
          className: 'site-header--scrolled',
          targets: '.site-header'
     },
     onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
     }
});

// Parallax Images
gsap.to(".floating-images-1", {
     yPercent: 50,
     ease: "none",
     scrollTrigger: {
          trigger: ".floating-images-wrapper-1",
          start: "top bottom",
          end: "bottom top",
          scrub: true
     },
});

gsap.to(".floating-images-2", {
     yPercent: 50,
     ease: "none",
     scrollTrigger: {
          trigger: ".floating-images-wrapper-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true
     },
});

gsap.to(".floating-images-3", {
     yPercent: 50,
     ease: "none",
     scrollTrigger: {
          trigger: ".floating-images-wrapper-3",
          start: "top bottom",
          end: "bottom top",
          scrub: true
     },
});

// Smooth Scroll
// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
     if (
          link.protocol !== window.location.protocol ||
          link.host !== window.location.host ||
          link.pathname !== window.location.pathname ||
          link.search !== window.location.search
     ) {
          return false;
     }

     return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
     const elem = hash ? document.querySelector(hash) : false;
     if (elem) {
          if (e) e.preventDefault();
          gsap.to(window, {
               duration: 2,
               scrollTo: elem
          });
     }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
     a.addEventListener('click', e => {
          scrollToHash(getSamePageAnchor(a), e);
     });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

// WoW JS Plugin
new WOW().init();

// Swiper slider
var swiper = new Swiper(".projects-slider", {
     direction: "horizontal",
     loop: false,
     slidesPerView: 1,
     speed: 1000,
     mousewheel: {
          releaseOnEdges: true,
     },
});

// Lightbox for images - https://github.com/biati-digital/glightbox
const lightbox = GLightbox({
     touchNavigation: true,
     loop: false,
 });