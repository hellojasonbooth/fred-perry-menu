
const menuToggler = document.querySelector('div.toggler')
const menuTag = document.querySelector('div.menu-wrap')
const mainContentTag = document.querySelector('section')
const coverTag = document.querySelector('div.menu-open--cover')
const logoTag = document.querySelector('div.logo-icon')

const burgerOne = document.querySelector('div.toggler div.burgerone')
const burgerTwo = document.querySelector('div.toggler div.burgertwo')
const burgerThree = document.querySelector('div.toggler div.burgerthree')
const preloaderTag = document.querySelector('div.preloader')

const mainTag = document.querySelectorAll('section.extra')

preloaderTag.style.opacity = 0


// this controls our menu all from a click event
menuToggler.addEventListener('click', function () {
  menuTag.classList.toggle('active')
  
  if (menuTag.classList.contains('active')) {
    mainContentTag.classList.add('active')
    coverTag.classList.add('active')
    logoTag.classList.add('active')
    burgerOne.style.transform = 'translateY(7px) rotate(45deg)'
    burgerTwo.style.opacity = 0
    burgerThree.style.transform = 'translateY(-7px) rotate(-45deg)'
    menuToggler.style.transform = 'rotate(180deg)'

  } else {
    mainContentTag.classList.remove('active')
    coverTag.classList.remove('active')
    logoTag.classList.remove('active')
    burgerOne.style.transform = ''
    burgerTwo.style.opacity = 1
    burgerThree.style.transform = ''
    menuToggler.style.transform = ''

  }
  
})


// we can select any tag to add to our animation
const animatedTags = document.querySelectorAll("div.hero-img, video, button")

animatedTags.forEach(tag =>{
  tag.style.opacity = 0
  tag.style.transform = 'translateY(36px)'
})

const fadeIn = function() {
    
  let delay = 0.06
  
  animatedTags.forEach(tag =>{

    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
     
    // adds css animation to all tags 

    if(tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.06
    }

  })
}


// run animation on load
fadeIn()

// listen for a scroll that runs our function in 
// conjunction with our if statement  
  document.addEventListener("scroll", function() {
    fadeIn()
  })