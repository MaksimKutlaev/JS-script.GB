const checkEl = document.querySelector('.check');
const checkboxEl = document.querySelector('#agree');
const errorEl = document.querySelector('.error-text');
const buttonEl = document.querySelector('.submit');

checkEl.addEventListener('submit', function(e) {
    e.preventDefault();
    // if (!checkboxEl.checked) {
    //     errorEl.textContent = 'необходимо согласиться с условими';
    // } else {
    //     errorEl.textContent = '';
    // }
    errorEl.textContent = checkboxEl.checked ? '' : 'необходимо согласиться с условими';
});

const formEl = document.querySelector('.form');
const btnTeaEl = document.querySelector('#tea');
const btnCoffeeEl = document.querySelector('#coffee');
const btnEl = document.querySelector('.choice');
const messageEl = document.querySelector('.message');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (btnTeaEl.checked) {
        messageEl.textContent = 'чай закончился';
    }
    if (btnCoffeeEl.checked) {
        messageEl.textContent = 'кофе закончился';
    }
});


const passEl = document.querySelector('.pass');
const passwordEl = document.querySelector('.password');
const btnSendEl = document.querySelector('.send');
const error3El = document.querySelector('.error3');

const password = '12345';
passEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordEl.value === password) {
        passwordEl.style.borderColor = 'green';
    } else if (passwordEl.value === '') {
        error3El.textContent = 'введите пароль';
        passwordEl.style.borderColor = 'red';
    } else if (passwordEl.value !== password) {
        error3El.textContent = 'пароль неверный';
        passwordEl.style.borderColor = 'red';
    }
});


const textBoxEl = document.querySelector('.textbox');
const h1El = document.querySelector('.text');

textBoxEl.addEventListener('input', (e) => {
    h1El.textContent = e.target.value;
})


