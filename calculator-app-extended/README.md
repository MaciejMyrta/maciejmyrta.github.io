# Calculator app solution
Challenge excercise provided by frontendmentor.io, solution contains HTML, pure CSS and JavaScript.
The solution is extended with one more task, not included in the main challenge. The display screen contains also
the input provided by the user which is displayed live during the expression being put into calculator.

### How to run the website:

Live-website version of the challenge is set up with help of github.io . Here is the URL:
https://maciejmyrta.github.io/calculator-app-frontendmentor

### CSS description: 

CSS file is designed in purpose to provide three displays in breakpoint up to 768px, up to 1100px and for wider desktops.
There are three color themes for whole the layout grouped in variables sets. The important thing in the task of the screen extension with user live input was to deal with large input containing a lot of digits and chars and possible big result which could break the smooth display at the end.



### JS description:

The main tasks for JavaScript section was to provide good automatic stuff to deal with the inputs and outputs of calculator's expressions.
It was good logical exercise to keep in mind all the possible outcomes and edge cases possible to arise on the particular functional buttons.
Some part of code is also responsible for the event of changing the color theme for whole the app with use of the variables grouped inside the CSS file.

### Lessons learned:

- Very helpful to understand the purpose of CSS variables which have massively improved the readability and clarity of the code.
- Good JavaScript challenge to make automatic solution for calculator logic in simple way. It was important to expect all the possible directions of references between the user's input and behavior of each particular functional button. 
- Additional feature of input display was challenging in terms of keeping the display window without overlapping of input and output values and not to come up beyond the display window.

### Setbacks which can be improved:
- Saving the *current theme* in local storage was not touched, but could be valuable feature.
- Keyboard input would be good JavaScript additional challenge but is not done yet.
- Theme slider could be animated in some nice way. It is produced only as a buttons series.