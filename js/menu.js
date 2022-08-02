const menuBtn = document.querySelector('.MenuOpener');
const menu = document.querySelector('.MenuContainer');
const menuExit = document.querySelector('.Exit');
const transition = document.querySelector('.Transition')

window.onload = () => {
    menuBtn.addEventListener('click', () => {
       Show();
    });

    menuExit.onclick = () => {
        Hide();
    }   
}

function Show() {
    menu.style.left = '0';
    menu.style.width = '100vw';
    menu.style.transitionDuration = '650ms';
}

function Hide() {
    menu.style.left = '-100%';
    menu.style.width = '0';
    menu.style.transitionDuration = '1s';
}

function Close() {
    transition.style.width = '0';
} 

function Open() {
    transition.style.width = '100%';
}

function Replace(url) {
    Open();
    setTimeout(() => { window.location.replace(url) }, 1500);
}

var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        Close();
    }
}, 1000);