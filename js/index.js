burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-res');
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})
