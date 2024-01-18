// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute) 
const blockEl = document.querySelector('.block');
const itemEl = document.createElement('div');
itemEl.classList.add('item');
itemEl.textContent = 'Элемент внутри';
itemEl.style.color = 'blue';
itemEl.style.border = '1px solid black';
itemEl.style.backgroundColor = '#f8f8f8';
itemEl.style.padding = '16px';
itemEl.setAttribute('class', 'item_1');
blockEl.appendChild(itemEl);

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const textEl = document.querySelector('text');
const h2El = textEl.previousElementSibling;
console.log(h2El);
const contentEl = textEl.parentElement;
console.log(contentEl);
const imgEl = contentEl.previousElementSibling;
console.log(imgEl);
const elemEl = contentEl.parentElement;
console.log(elemEl);

//С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

const h22El = document.querySelector('h2');
let currentEl = h22El;

while (contentEl.parentElement !==null) {
    currentEl = contentEl.parentElement;
    console.log(currentEl);
}

//Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
//Цвет у рамки сделать красным

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('.textIn');
console.log(inputEl.textContent);

btnEl.onclick = function() {
    if (inputEl.value === '') {
        const attentionEl = document.createElement('h2');
        attentionEl.textContent = 'Поле пустое';
        inputEl.style.borderColor = 'red';
    }
}

const cleanEl = document.createEleme('button');
cleanEl.textContent = 'clean form';
formEl.append(cleanEl);
cleanEl.onclick = function() {
    inputEl.value = '';
}

