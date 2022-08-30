const navbarMenu = document.querySelector('.navbar-menu');
const navbarHeader = document.querySelector('.navbar-front-header');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const accArrows = document.querySelectorAll('.acc-arrow');
const accAnswers = document.querySelectorAll('.answer');
const featuresTabsSwitch = document.querySelectorAll('.features-tabs-switch');
const redBottom = document.querySelectorAll('.red-bottom');
const featureDivs = document.querySelectorAll('.feature');

iconHamburger.addEventListener('click', () => {
    navbarMenu.style.display = 'flex';
    iconHamburger.style.display = 'none';
});

iconClose.addEventListener('click', () => {
    navbarMenu.style.display = 'none';
    iconHamburger.style.display = 'block';
});

accArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        let answer = arrow.parentNode.nextElementSibling;
        if (arrow.classList.contains('opened')) {
            arrow.classList.remove('opened');
            answer.style.display = 'none';
        } else {
            arrow.classList.add('opened');
            answer.style.display = 'block';
        };
    });
});

const featuresDisplay = (index) => {
    for (const divs of [redBottom, featureDivs]) {
        divs.forEach(div => {
            div.style.display = 'none';
        });
        divs[index].style.display = 'grid';
    };
    featuresTabsSwitch.forEach(tab => {
        tab.classList.contains('feature-selected') && tab.classList.remove('feature-selected');
        featuresTabsSwitch[index].classList.add('feature-selected');
    });
};

featuresDisplay(0);

featuresTabsSwitch.forEach(tab => {
    tab.addEventListener('click', () => {
        index = [...featuresTabsSwitch].indexOf(tab);
        featuresDisplay(index);
    });
});
