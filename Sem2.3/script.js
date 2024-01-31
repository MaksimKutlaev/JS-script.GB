// В html создать кнопку button
const btnEl = document.querySelector('button');
// После загрузки страницы вывести в консоль текст “страница загрузилась”
window.addEventListener('load', function(e) {
    console.log('страница загрузилась');
});
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
btnEl.onclick = () => {
    console.log('событие onclick');
};
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
btnEl.addEventListener('click',function(e) {
    console.log('событие addEventListener');
});

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
const btnsEl = document.querySelector('.buttons');
btnsEl.addEventListener ('click', function(e) {
    console.log(e.target);
});
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
const btn4El = document.querySelector('.btn4');
let counter = 0;
btn4El.addEventListener ('click', function(e) {
    counter++;
    console.log(counter);
});
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
const btn5El = document.querySelector('.btn5');
btn5El.addEventListener('click', function (e) {
    btn5El.textContent = 'Вы нажали на эту кнопку';
});


// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
const btnh1El = document.querySelector('.btnh1');

const h1El = document.createElement('h1');
h1El.textContent = 'Новый заголовок';

btnh1El.addEventListener('click', function (e) {
    btnh1El.parentElement.appendChild(h1El); 
})
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
const btnDelEl = document.querySelector('.del');

btnDelEl.addEventListener('click', function (e) {
    if (btnDelEl.parentElement.contains(h1El)) {
        btnDelEl.parentElement.removeChild(h1El);
    }
});
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
const btnMouse = document.querySelector('.mouse');
btnMouse.addEventListener('mouseover', function(e) {
    console.log('вы навели на данную кнопку');
});
btnMouse.addEventListener('mouseleave', function(e) {
    console.log('наведения на кнопку больше нет');
});

// Создать в html список состоящий из 3-х произвольных элементов li
const listEls = document.querySelector('.list');
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
const addEl = document.querySelector('.lists1');

addEl.addEventListener('click', function(e) {
    const newLiEl = document.createElement('li');
    newLiEl.textContent = 'новый элемент списка';
    listEls.append(newLiEl);
    newLiEl.classList.add('item');
});
// Создать кнопку, которая будет удалять первый элемент из созданного списка
const delEl = document.querySelector('.lists2');

delEl.addEventListener('click', function(e) {
    const listEl = document.querySelector('.item');
    listEl.remove();
});
// Создать кнопку, при клике на которую ей добавляется класс “click”
const classEl = document.querySelector('.lists3');

classEl.addEventListener('click', function(e) {
    classEl.classList.add('click');
});


// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”





