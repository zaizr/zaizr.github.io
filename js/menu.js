const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.RealMenu');
const menuClose = document.getElementById('menuClose');
window.onload = function() {
    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex'; 
    });
    menuClose.addEventListener('click', () => {
       menu.style.display = 'none'; 
    });
};

function Hide() {
    menu.style.display = 'none'; 
}