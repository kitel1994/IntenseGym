const navbar = document.getElementById('navbar')
const angle = document.getElementById('angle')
const topPage = document.getElementById('top-page')
const dots = document.getElementById('dots')
const hamb = document.getElementById('hamb')
const menu = document.getElementById('menu')


// scrollowanie
window.addEventListener('scroll', () => {
    if (this.scrollY > 20) {
        navbar.classList.add('active')
    }
    else {
        navbar.classList.remove('active')
    }
    if (this.scrollY > 500) {
        angle.classList.add('active')
    } else {
        angle.classList.remove('active')
    }
})

// przewijanie strony do góry
angle.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// kropki i hamb
dots.addEventListener('click', () => {
    topPage.classList.toggle('active')
})
hamb.addEventListener('click', () => {
    menu.classList.toggle('active')
})
