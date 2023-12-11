const menu = document.querySelector('.li-container');
const navmenu = document.querySelector('.burger-btn');

navmenu.onclick= function(){
    menu.classList.toggle('active')
    navmenu.classList.toggle('active')
}