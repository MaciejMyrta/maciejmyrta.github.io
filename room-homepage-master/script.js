const closeButton = document.getElementById('icon-close');
const hamburger = document.getElementById('hamburger');
const navPanel = document.getElementById('nav-panel');
const images = document.getElementsByClassName('images');

const arrows = document.getElementsByClassName("arrow");
const bgImage = document.getElementById('head-gallery');
const stories = document.querySelectorAll('.story');
let storyCount = 1;

for (let arrow of arrows) {
    let whichArrow = '';
    arrow.addEventListener('click', (e) => {
        arrow.classList.add('arrow-clicked');
        setTimeout(() => { 
            arrow.classList.remove('arrow-clicked');
        }, 300);
        e.target.tagName == 'BUTTON' ? whichArrow = e.target.id : whichArrow = e.target.alt;
        if (whichArrow == 'arrow-left') {
            storyCount == 1 ? storyCount = 3 : storyCount -= 1;
        }
        else {
            storyCount == 3 ? storyCount = 1 : storyCount += 1;
        }
        for (const story of stories) {
            story.style = "display: none";
        };
        document.getElementById(`story-${storyCount}`).style = "display: block";
        bgImage.style.backgroundImage = `var(--image-${storyCount})`;
    });
};

const colorChange = (color, filter) => {
    document.body.style.backgroundColor = color;
    for (const image of images) {
        image.style.webkitFilter = filter;
    }
};

let navPanelStatus = 'closed';

let panelFunc = (button) => {
    button.addEventListener('click', () => {
        if (navPanelStatus == 'open') {
            navPanelStatus = 'closed'
            navPanel.style.transform = "translateX(100%)"
            colorChange('white', 'none');
        } 
        else {
            navPanelStatus = 'open'
            navPanel.style.transform = "translateX(-100%)";
            colorChange('grey', 'brightness(0.5)');
        };
    });
};

panelFunc(closeButton);
panelFunc(hamburger);