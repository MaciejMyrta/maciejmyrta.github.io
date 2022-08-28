const hamburger = document.getElementById('hamburger');
const iconClose = document.getElementById('icon-close');
const navigator = document.querySelector('.navigator');
const arrows = document.querySelectorAll('.nav-panel');
const navLists = document.querySelectorAll('.nav-list');

const showUp = (element) => {
    element.style = "display: initial";
}

const closeDown = (element) => {
    element.style = "display: none";
}

const detectArrow = (element) => {
    let arrow = element.querySelector('.arrow-dark');
    window.innerWidth >= 1000 && (arrow = element.querySelector('.arrow-light'));
    return arrow;
}

const resetNav = () => {
    arrows.forEach((arrow) => {
        arrow.classList.contains('nav-panel-expanded') && arrow.classList.remove('nav-panel-expanded');
        arrow.parentNode.querySelector('p').style = "font-weight: normal; text-decoration: none";
    });
    for (let navList of navLists) {
        closeDown(navList);
    };
};

hamburger.addEventListener('click', () => {
    navigator.style.zIndex = "2";
    closeDown(hamburger);
    showUp(iconClose);
});

iconClose.addEventListener('click', () => {
    navigator.style.zIndex = "-2";
    closeDown(iconClose);
    showUp(hamburger);
});

window.addEventListener("resize", () => {
    closeDown(iconClose);
    resetNav();
    if (document.body.clientWidth < 1000) {
        showUp(hamburger);
    }
    else {
        closeDown(hamburger);
        navigator.style = "display: flex";
    };
});

const resetPanels = (index) => {
    for (let i=0; i < arrows.length; i++) {
        if (i!==index) {
            let arrow = arrows[i];
            arrow.classList.contains('nav-panel-expanded') && arrow.classList.remove('nav-panel-expanded');
            arrow.parentNode.querySelector('p').style = "text-decoration: none";
        };
    };
};

arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        resetPanels(Array.from(arrows).indexOf(this));
        this.classList.toggle('nav-panel-expanded')
        let navList = this.nextElementSibling;
        let listHeader = this.parentNode.querySelector('p');

        if (this.classList.contains('nav-panel-expanded')) {
            navLists.forEach(function(navList) {
                navList.style.display = 'none';
            });
            navList.style.display = 'initial';
            if (document.body.clientWidth >= 1000) {
                listHeader.style = "text-decoration: underline";
            }
        }
        else {
            navList.style.display = 'none';
            listHeader.style = "text-decoration: none";
        };
    });
});
