const navbarMenu = document.querySelector('.navbar-menu');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');
const sliderButtons = document.querySelector('.slider-buttons')
const peopleChoices = document.querySelectorAll('.slider-buttons > input');
const people = document.querySelectorAll('.person');

iconHamburger.addEventListener('click', () => {
    navbarMenu.style.display = 'flex';
    iconHamburger.style.display = 'none';
    iconClose.style.display = 'block';
});

iconClose.addEventListener('click', () => {
    navbarMenu.style.display = 'none';
    iconHamburger.style.display = 'block';
    iconClose.style.display = 'none';
});

const mobileDisplayCheckedPerson = () => {
    const inputChecked = document.querySelector('.slider-buttons > input:checked');
    document.getElementById(`person-${inputChecked.value}`).style.display = 'block';
}

peopleChoices.forEach((button) => {
    button.addEventListener('click', () => {
        people.forEach((person) => {
            button.value === person.id.slice(-1) ? person.style.display = 'block' : person.style.display = 'none';
        });
    });
});


let desktopNavbarMovement = () => {
    if(document.body.clientWidth > 1100) {
        sliderButtons.style.display = 'none';
        people.forEach((person) => {
            person.style.display = 'block'
        });
    }
    else {
        sliderButtons.style.display = 'block';
        people.forEach((person) => {
            person.style.display = 'none'
        });
        mobileDisplayCheckedPerson();
    };
};

mobileDisplayCheckedPerson();
desktopNavbarMovement();
window.addEventListener("resize", () =>  {desktopNavbarMovement()});