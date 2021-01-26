const btnHamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')


btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {   // Close the hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach( element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }
    else {
        body.classList.add('noscroll')
        header.classList.add('open')  // Open the hamburger menu
        fadeElems.forEach( element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })


    }
})