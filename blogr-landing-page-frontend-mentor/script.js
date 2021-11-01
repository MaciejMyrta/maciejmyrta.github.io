const hamburger = document.getElementById('hamburger');
const iconClose = document.getElementById('icon-close');
const navigator = document.querySelector('.navigator');

let arrows = document.querySelectorAll('.nav-panel');
let navLists = document.querySelectorAll('.nav-list');

const showUp = (element) => {
    element.style = "display: initial";
}

const closeDown = (element) => {
    element.style = "display: none";
}

const detectArrow = (element) => {
    let arrow = element.querySelector('.arrow-dark');
    if (window.innerWidth >= 1000) {
        arrow = element.querySelector('.arrow-light');
    };
    return arrow;
}

const resetNav = () => {
    arrows.forEach((element) => {

        for(arrow of element.getElementsByTagName('img')) {
            arrow.style = "transform: unset";
        }
        element.querySelector('p').style = "font-weight: unset; text-decoration: none";
    });

    for(navList of navLists) {
        closeDown(navList);
    };
};

let navOpened = false;

hamburger.addEventListener('click', () => {
    navigator.style.zIndex = "2";
    closeDown(hamburger);
    showUp(iconClose);
    navOpened = true;
    resetNav();
});

iconClose.addEventListener('click', () => {
    navigator.style.zIndex = "-2";
    closeDown(iconClose);
    showUp(hamburger);
    navOpened = false;
});

let listOpened = false;

// Click event dropdown panel solution for mobile devices without hover option

for (let arrow of arrows) {

    arrow.addEventListener('click', (element) => {

        if (window.innerWidth < 1000) {
            currentList = element.target.parentNode.parentNode.querySelector('.nav-list');
            listHeader = element.target.parentNode.querySelector('p');
            resetNav();

            if (listOpened == currentList) {
                listOpened = false;
            }

            else {
                showUp(currentList);
                listOpened = currentList;
                let arrow = detectArrow(element.target.parentNode);
                arrow.style = "transform: rotate(180deg); margin-top: -3px";
                listHeader.style = "font-weight: bold";
                if (window.innerWidth >= 1000) {
                    listHeader.style = "text-decoration: underline";
                };
            };
        };
    });
};

// Solution to close and reset the properties of navigator panels during resize

let initialWidth = window.innerWidth;

window.addEventListener("resize", () => {

    if (window.innerWidth != initialWidth) {

        if (window.innerWidth < 1000) {

            if (navigator.style.zIndex = "2") {
                navigator.style.zIndex = "-2";
                resetNav();
                closeDown(iconClose);
                showUp(hamburger);
            };
        }

        else {
            resetNav();
            closeDown(iconClose);
            closeDown(hamburger);
            navigator.style = "display: flex";
        };

        initialWidth = window.innerWidth;
    };
});

// Solution to drop the panels down via hover event on desktop devices

for (let arrow of arrows) {

    arrow.addEventListener('mouseenter', (event) => {
        currentList = event.target.parentNode.querySelector('.nav-list');
        listHeader = event.target.parentNode.querySelector('p');
        let arrow = detectArrow(event.target.parentNode);
        arrow.style = "transform: rotate(180deg); margin-top: -3px";
        listHeader.style = "font-weight: bold";
        if (window.innerWidth >= 1000) {
            listHeader.style = "text-decoration: underline";
        }
        showUp(currentList);
    });

    arrow.addEventListener('mouseover', (event) => {
        resetNav();
    });
};

document.addEventListener('click', (event) => {

    if (window.innerWidth >= 1000) {

        if (event.target.className != 'nav-list') {
            for (navList of navLists) {
                navList.style = "display: none";
            };
            resetNav();
        };
    };
});
