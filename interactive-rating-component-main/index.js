const form = document.querySelector('.ratings-buttons')
for (let i=1; i<=5; i++) {
    let box = document.createElement('div');
    box.classList.add('circle');
    box.classList.add('number');

    let label = document.createElement('label');
    label.setAttribute('for', `grade-${i}`);
    label.append(i);

    let input = document.createElement('input');
    input.type = "radio";
    input.id =  `grade-${i}`;
    input.name =  `grade-${i}`;
    input.value = i;
    input.classList.add('grade');

    form.append(box);
    box.append(label);
    box.append(input);
}

const unactiveNumbers = () => {
    document.querySelectorAll('.number').forEach((number) => {
        number.classList.remove('active');
    });
};

let checkedGrade;

document.querySelectorAll('.number').forEach((number) => {
    number.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            unactiveNumbers();
            this.classList.add('active');
            checkedGrade = number.querySelector('input').value;
        };
    });
});

document.querySelector('.submit-button-box > input').addEventListener('click', () => {
    if(checkedGrade) {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.thanks').style.display = 'block';
        document.getElementById('grade-span').innerText = checkedGrade;
    }
})