# Blogr landing page solution
Challenge excercise provided by frontendmentor.io, solution contains HTML, pure CSS and JavaScript.

### How to run the website:

Live-website version of the challenge is set up with help of github.io . Here is the URL:
https://maciejmyrta.github.io/blogr-landing-page-frontend-mentor

### CSS description: 

CSS file is designed in purpose to provide two main breakpoints - the mobile one under 1000 px and desktop one with bigger resolutions.
There are also a few intermediate and higher temporary breakpoints designed in goal to improve the look and the distribution of some elements containing the images positioned as an absolute property.
The main sections and sub-divs were named with meaningfulness in mind.

### JS description:

JavaScript file was focused on setting up the behavior of navigation panel, which is placed inside the header. It is hidden in the mobile version and visible in the desktop one. 

- The idea was to enable navigating between the panels with links into dummy directions of a website by hovering the panels' headers. 
- The solution for mobile users is also taken into consideration - under 1000px width breakpoint we can navigate with click events as well.
- Panel is closing within any change of width size within the window where page is being displayed. Closing the panel also resets the currently expanded panels.

### Lesson learned:

This challenge helped a lot to deep dive into aspects of creating intuitive and user friendly navigation panel for the user with coding all the needed behind-the-scenes automatic behaviors.
CSS section contained some basic or intermediate stuff, but it was important to take care of many details working together to provide the modern design in all possible display breakpoints.
It was good practice for understanding the position properties with placing the various elements or images as absolute elements or as a backgrounds mixed up with gradient colors being the ground for the containers.

### Setbacks which can be improved:

- Hover action on buttons is not working well on mobile phone device despite correct behavior on desktop in both breakpoints.
- Arrangement of CSS file could be wiser with less chaotic approach. Properties could be better aggregated with finding more common elements which could be grouped into HTML classes more than div IDs.


