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
        hamburgerBtn.classList.toggle('dynamic-style')
        mobileOverlay.classList.toggle('dynamic-style')
        menu.classList.toggle('dynamic-style')
    })
}
// Menu clase by mobile overlay
if(mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
        menu.classList.remove('dynamic-style')
        mobileOverlay.classList.remove('dynamic-style')
        hamburgerBtn.classList.remove('dynamic-style')

    })
}





// Mobile Menu close




// closeEls.forEach(el => {
//     el.addEventListener('click', () => {
//         hamburgerBtn.classList.remove('dynamic-style')
//     })
// })