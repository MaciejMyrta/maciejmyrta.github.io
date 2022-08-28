let navDropdowns = document.querySelectorAll('.nav-dropdown');
let hamburger = document.querySelector('.hamburger-box');
let closeMenu = document.querySelector('.x-box');
let introLayout = document.querySelector('.intro-layout');
let menuLayout = document.querySelector('.menu-layout');
let navigator = document.querySelector('.navigator');
let header = document.querySelector('header');
let logoBox = document.querySelector('.logo-box');

navDropdowns.forEach(function(panel) {
    panel.addEventListener('click', function() {
        this.classList.toggle('expanded');
        let navList = this.nextElementSibling;
        if (this.classList.contains('expanded')) {
            navList.style.display = 'flex';
            console.log(this.querySelector('p'));
            this.querySelector('img').src = 'images/icon-arrow-up.svg'
        } 
        else {
            navList.style.display = 'none';
            this.querySelector('img').src = 'images/icon-arrow-down.svg'
        }
    });
});

hamburger.addEventListener('click', () => {
    menuLayout.style.display = 'flex';
});

hamburger.addEventListener('click', () => {
    menuLayout.style.display = 'flex';
    introLayout.classList.add('covered');
});

closeMenu.addEventListener('click', () => {
    menuLayout.style.display = 'none';
    introLayout.classList.remove('covered');
});

const contains = (parent, child) => {
    return parent !== child && parent.contains(child);
  };

let desktopNavbarMovement = () => {
    if(document.body.clientWidth > 756) {
        !contains(header, navigator) && logoBox.parentNode.insertBefore(navigator, logoBox.nextSibling);
        introLayout.classList.contains('covered') && introLayout.classList.remove('covered');
        if(menuLayout.style.display === 'flex') {
            menuLayout.style.display = 'none'
        };
    }
    else {
        contains(header, navigator) && document.querySelector('header > .navigator').remove();
        !contains(menuLayout, navigator) && menuLayout.append(navigator);
    };
};

desktopNavbarMovement();
window.addEventListener("resize", () =>  {desktopNavbarMovement()});