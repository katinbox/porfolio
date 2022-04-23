(()=>{
  const hamburgerBtn = document.querySelector('.hamburger-btn'),
    navMenu = document.querySelector('.nav-menu'),
    closeNavBtn = document.querySelector('.close-nav-menu'),
    navMenuItems = navMenu.querySelectorAll('.nav-menu-inner ul li a')

    hamburgerBtn.addEventListener('click', showNavMenu);
    closeNavBtn.addEventListener('click', hideNavMenu);

    function showNavMenu() {
      navMenu.classList.add('open')
    }

    function hideNavMenu() {
      navMenu.classList.remove('open');
      fadeOutEffect()
    }

    function fadeOutEffect() {
      document.querySelector('.fade-out-effect').classList.add('active')
      setTimeout(() => document.querySelector('.fade-out-effect').classList.remove('active'), 300)
    }

    navMenuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        hideNavMenu();
        const itemActive = navMenu.querySelector('.active')
        itemActive.classList.remove('active', 'hover-in-shadow', 'inner-shadow')
        itemActive.classList.add('outer-shadow')
        e.target.classList.add('active', 'inner-shadow')
      })
    })

})();

(() => {
  const filterContainer = document.querySelector(".porfolio-filter"),
    porfolioItems = document.querySelectorAll(".porfolio-item")

  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains('filter-item') && !e.target.classList.contains('active')) {
      filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      e.target.classList.add("active", "outer-shadow")
      const target = e.target.getAttribute('data-target')
      porfolioItems.forEach((item) => {
        if (target === item.getAttribute('data-category') || target === 'all') {
          item.classList.remove("hide")
          item.classList.add("show")
        }
        else {
          item.classList.remove("show")
          item.classList.add("hide")
        }
      })
    }
  })
}
)();


(() => {
  const sliderContainer = document.querySelector('.testi-container'),
    sliders = sliderContainer.querySelectorAll('.testi-item'),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector('.testti-slider-nav .prev'),
    nextBtn = document.querySelector('.testti-slider-nav .next')

  let slideIndex = 0;
  sliders.forEach((slider) => {
    slider.style.width = slideWidth + 'px';
  })
  sliderContainer.style.width = slideWidth * sliders.length + 'px';
  nextBtn.addEventListener('click', () => {
    if (slideIndex === sliders.length - 1) {
      slideIndex = 0;
    }
    else {
      slideIndex++;
    }
    slider()
  })
  prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
      slideIndex = sliders.length - 1;
    }
    else {
      slideIndex--;
    }
    slider()
  })

  const slider = () => sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + 'px'
})();
