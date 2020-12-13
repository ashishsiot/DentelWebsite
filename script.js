//selectors
let header =document.querySelector('.header');
let hamburgerMenu =document.querySelector('.hamburger-menu');

window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY > 300;      //changes title bar back to solid 
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})