const menu = document.querySelector('#mobile-menu')
const menulink = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
})

var lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY || document
    .documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})



