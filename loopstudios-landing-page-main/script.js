'use strict'

const hamBurger =document.querySelector('.hamburger')
const mobileMenuList = document.querySelector('.mobile-menu-list')
const closeBtn = document.querySelector('.icon-close')

const openMenu = function(){
    mobileMenuList.classList.remove('hidden')
}
const closeMenu = function(){
    mobileMenuList.classList.add('hidden')
}

hamBurger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)