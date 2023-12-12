const menu = document.querySelector('.li-container');
const navmenu = document.querySelector('.burger-btn');

navmenu.onclick= function(){
    navmenu.classList.toggle('active')
    menu.classList.toggle('active')
    
}