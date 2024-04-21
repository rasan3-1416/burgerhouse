const body = document.querySelector('body')
const header = document.getElementById('header')

// A function that moves a class between elements
function displacement(removeEl, addEl, desiredCl) {
    desiredCl = desiredCl || 'dynamic-style'
    removeEl.classList.remove('dynamic-style')
    addEl.classList.add('dynamic-class')
}

// Header Navigation Feature
const menu = document.getElementById('menu')
const  mobileOverlay = document.getElementById('mobile-overlay')
const  hamburgerBtn = document.getElementById('hamburger-btn')
let menuCloseEls = [mobileOverlay,hamburgerBtn]

// Menu open & close by hamburger btn
if(hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        body.classList.toggle('dynamic-style')
        hamburgerBtn.classList.toggle('dynamic-style')
        mobileOverlay.classList.toggle('dynamic-style')
        menu.classList.toggle('dynamic-style')
    })
}

// Menu clase by mobile overlay
if(mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
        body.classList.remove('dynamic-style')
        menu.classList.remove('dynamic-style')
        mobileOverlay.classList.remove('dynamic-style')
        hamburgerBtn.classList.remove('dynamic-style')

    })
}

// Change header bg on scroll amount more than 0
let deliveryNumber = document.getElementById('delivery-number')

function scrollHeader () {
    if(this.scrollY > 0) {
        header.classList.add('dynamic-style')
        deliveryNumber.classList.add('dynamic-style')
    }else {
        header.classList.remove('dynamic-style')
        deliveryNumber.classList.remove('dynamic-style')
    }
}
window.addEventListener('scroll', scrollHeader)

// Burger Swiper feature in menu section
let burgerSwiperContainer = document.querySelector('.burger-swiper-container')
let burgerSwiperPagination = document.querySelector('.burger-swiper-pagination')

let popurlarSwiper = new Swiper(burgerSwiperContainer, {
    loop: true,
    slidesPerView: 'auto',
    // centeredSlides: 'true',
    // spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: burgerSwiperPagination,
        dynamicBullets: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },1024: {
            centeredSlides: 'true',
            slidesPerView: 3,
            // spaceBetween: 40,
        },1250: {
            // spaceBetween: 50,
        }
    }
})

// Read more feature
let rmContainers = document.querySelectorAll('.rm-container')
let rmTexts = document.querySelectorAll('.rm-text')
let rmBtns = document.querySelectorAll('.rm-btn')

rmContainers.forEach((rmContainer,index) => {
    rmContainer.addEventListener('click', () => {
        rmTexts[index].classList.toggle('dynamic-style')
        let rmBtnContext = rmTexts[index].classList.contains('dynamic-style') ? '...Read Less' : '...Read More'
        rmBtns[index].textContent = rmBtnContext
    })
})


// Story Swiper feature in menu section
let discoverSwiperContainer = document.querySelector('.discover-swiper-container')
let discoverSwiperPagination = document.querySelector('.discover-swiper-pagination')

let discoverSwiper = new Swiper(discoverSwiperContainer, {
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: discoverSwiperPagination,
        clickable: true,
    }
})