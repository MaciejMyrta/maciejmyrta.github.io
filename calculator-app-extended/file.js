document.getElementById('theme-1').addEventListener('click', () =>  document.body.className = 'theme-blue');
document.getElementById('theme-2').addEventListener('click', () =>  document.body.className = 'theme-grey');
document.getElementById('theme-3').addEventListener('click', () =>  document.body.className = 'theme-violet');

let expression = '0';
let result = 0;
let state = 'counting';
let lastChar = expression[expression.length - 1];
let del = document.getElementById('del');
let reset = document.getElementById('reset');
let equal = document.getElementById('equal');
let dot = document.getElementById('dot');
let maths = ['+', '-', '*', '/'];
const checker = (expression) => maths.some((element) => expression.includes(element));

let expressionHTML = document.querySelector('#expression > p');
let resultHTML = document.querySelector('#result-count > h3');
let resultDescHTML = document.querySelector('#result-desc > h3');

const setEqualButtonSize = () => {
    resultHTML.textContent == "Let's dont divide by zero." ? resultHTML.style = 'font-size: var(--divide-warn)' : resultHTML.style.fontSize = '1.17em';
};

const resetValues = () => {
    expression = '0';
    result = 0;
    lastChar = expression[expression.length - 1];
};

const updateExpression = () => {
    lastChar = expression[expression.length - 1];
    expressionHTML.textContent = expression;
};

document.querySelectorAll('.digit').forEach(item => {
    let value = item.textContent;
    item.addEventListener('click', () => {
        if(state == 'finished') {
            state = 'counting';
            resultHTML.textContent = '0';
            resultDescHTML.style.color = 'var(--slider-and-input-background)';
        };
        setEqualButtonSize();
        (expression == '0') ? (expression = value) : (expression = expression + value);
        updateExpression();
    });
});

document.querySelectorAll('.maths').forEach(item => {
    let value = item.textContent == 'x' ? '*' : item.textContent;
    
    item.addEventListener('click', () => {

        if (state == "counting") {

            if(expression.substr(-2,2) == '/0') {
                resultHTML.style = 'font-size: var(--divide-warn)';
                resultHTML.textContent = "Let's dont divide by zero.";
            } 
            else {
                resultHTML.style.fontSize = '1.17em';
                if (checker(expression) && (!maths.includes(lastChar))) {
                    result = eval(expression);
                    resultHTML.textContent = result;
                }
                if(maths.includes(lastChar) || lastChar == '.') {
                    expression = expression.slice(0, -1) + value;
                }
                else {
                    expression = expression + value; 
                };
                updateExpression();
            };
        };
    });
});

del.addEventListener('click', () => {
    if (state == 'counting') {
        (expression.length > 1) ? (expression = expression.slice(0, -1)) : (expression = '0');
        updateExpression();
    };
});

reset.addEventListener('click', () => {
    resetValues();
    expressionHTML.textContent = '';
    resultHTML.textContent = '0';
    resultHTML.style.fontSize = '1.17em';
    resultDescHTML.style.color = 'var(--slider-and-input-background)';
});

dot.addEventListener('click', () => {
    if(state == 'finished') {
        state = 'counting';
        resultHTML.textContent = '0';
        resultDescHTML.style.color = 'var(--slider-and-input-background)';
    };

    setEqualButtonSize();

    const regex = '.*[///*+-]';
    let dotCheck = expression.match(regex);
    let currentNumber = expression.replace(dotCheck, '');
    if (!currentNumber.includes('.')) {
        maths.includes(lastChar) ? expression = expression + '0.' : expression = expression + '.';
        updateExpression();
    };
});

equal.addEventListener('click', () => {
    if (state == 'counting') {

        if(expression.substr(-2,2) == '/0') {
            resultHTML.style = 'font-size: var(--divide-warn)';
            resultHTML.textContent = "Let's dont divide by zero.";
        }
        else {
            state = 'finished'
            result = eval(expression);
            if(expression[expression.length - 1] == '.') {
                expressionHTML.textContent = expressionHTML.textContent.slice(0, -1);
            }

            resultHTML.style.fontSize = '1.17em';
            resultHTML.textContent = result;
            resetValues();
            resultDescHTML.style.color = 'var(--header-font-color)';
        };
    };
});