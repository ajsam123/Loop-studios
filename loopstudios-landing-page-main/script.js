'use strict'

const hamBurger =document.querySelector('.hamburger')
const mobileMenuList = document.querySelector('.mobile-menu-list')
const closeBtn = document.querySelector('.icon-close')
const noScroll = document.querySelector('.no-scroll')
const home = document.querySelector('body')
const mobileMenuLink = document.querySelectorAll('.mobile-menu-link')

const openMenu = function(){
    mobileMenuList.classList.remove('hidden')
    home.style.overflow = 'hidden'
    home.style.width = '100%'
    
    
}
const closeMenu = function(){
    mobileMenuList.classList.add('hidden')
    home.style.overflow = ''
}

// for(i =0; i < mobileMenuList.length; i++) () => {
//     const mobileMenuLink1 = mobileMenuList[i]
//     const mobileMenu = mobileMenuLink1.addEventListener('.mobile-menu-link')
    
//     mobileMenuLink.addEventListener('click', () => {
//         mobileMenu.classList.toggle('hidden')
//     })
    




hamBurger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)