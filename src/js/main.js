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

// Popurlar Swiper feature
let burgerSwiperContainer = document.querySelector('.burger-swiper-container')
let burgerSwiperPagination = document.querySelector('.swiper-pagination')

let popurlarSwiper = new Swiper(burgerSwiperContainer, {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: burgerSwiperPagination,
        dynamicBullets: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },992: {
            slidesPerView: 3,
            spaceBetween: 46,
        }
    }
})