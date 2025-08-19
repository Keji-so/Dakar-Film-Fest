let isMobile = false
function checkDevice() {
  if (window.innerWidth <= 767) {
    isMobile = true
  } else {
    isMobile = false
  }
}
checkDevice()
window.addEventListener('resize', checkDevice)

const initSmoothScroll = () => {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

initSmoothScroll()
gsap.registerPlugin(ScrollTrigger)

//hero slide
const heroSlide = new Swiper('.hero-swiper', {
  slidesPerView: 'auto',
  autoplay: true,
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  navigation: {
    nextEl: '.slide-arrow.next',
    prevEl: '.slide-arrow.prev',
  },
  pagination: {
    el: '.pagination-wrapper',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
})

// text scroll animation
const scrollerLeft = document.querySelector('.scroll-text')
const textScrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.scroll-container',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 2,
  },
})

//parallax image animation
textScrollTl
  .to(scrollerLeft, {
    x: () => {
      const leftRect = scrollerLeft.getBoundingClientRect()
      const sectionWidth = window.innerWidth
      return sectionWidth - 50 - (leftRect.right - 150)
    },
    duration: 1,
    ease: 'none',
  })
  .to(
    '.parallax-image.parallax-1',
    {
      y: -100,
      ease: 'none',
    },
    '<'
  )
  .to(
    '.parallax-image.parallax-2',
    {
      y: isMobile ? -100 : -300,
      ease: 'none',
    },
    '<'
  )
  .to(
    '.parallax-image.parallax-3',
    {
      y: isMobile ? 80 : 150,
      ease: 'none',
    },
    '<'
  )

//spotlight slide
const spotlightSlide = new Swiper('.spotlight-slider', {
  slidesPerView: 'auto',
  grabCursor: true,
  spaceBetween: 22,
  loop: false,
})
