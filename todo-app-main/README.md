# Todo app solution
Todo app exercise provided by frontendmentor.io, solution contains HTML, pure CSS and JavaScript. 
The idea of a challenge is about creating the list of "to do" tasks, which populate the container within the manual input.
User can control manipulate with each task by marking it as completed, deleting, changing the view of the tasks between all/active and pending ones. 
Application provides a functionality of changing the order of tasks by "drag & drop" solution prepared in JavaScript.
All the setup is being saved in localStorage - does mean the current shape of tasks container and color-theme as well, which is changable between dark and light mode.

### How to run the website:

Live-website version of the challenge is set up with help of github.io . Here is the URL:
https://maciejmyrta.github.io/todo-app-main

### CSS description: 

CSS file is designed in purpose to provide two displays in breakpoint up to 768px, and for desktops.
There are two color themes for whole the layout grouped in variables sets. Layout of containers is simple.
The one thing to be thought out was the automatic distribution of elements which were changing their display and adhension 
to different containers within breakpoint change and status of tasks container - different divs were displayed and closed 
depending on whether tasks container was empty or populated at the time.


### JS description:

JavaScript part was the most important one in this exercise. All the logic about populating the tasks container, 
deleting particular tasks or all completed at once, changing the display of HTML classes depending on buttons and divs contents.
The most important thing was to describe all the possible actions in separate functions, which were used as blocks of 
more general functionalities, to make all the flow working as much programatically as possible.

All the basic features were implemented into workflow which is being saved to localStorage at the time of each one move of the user.
This helps to get the most current setup of the content during the site reload.

### Lessons learned:

- Preparing the neat and tidy JS script which covers all the logic of "to do" listing app and prepares the content in automatic way.
- Diving into basics of localStorage throughout the task of saving the "to do" container shape with all the supportive elements of it and CSS color theme status.
- Implementation of "drag and drop" functionality with use of pure JS in goal to easily change the order of tasks by mouse.
- Input window interacting by keyboard used to populate the container of elements with dynamically created content.
- Workaround with use of 'before' and 'after' elements to customize the style of input checkbox element. 

### Setbacks which can be improved:
- Input checkbox could look better - not managed to prepare good-looking, different border in 'after' checked element, replacing the basic 'before' one.
- Some nice CSS transitions related to addition/deletion/moving of elements could be developed.