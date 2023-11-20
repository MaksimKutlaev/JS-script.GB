"use strict";

// Задание 1:
// 1. Создать две переменные и спросить у пользователя значения для данных
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст:
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

const userName = prompt("Введите имя: ");
const userAge = prompt("Введите возраст: ");

alert(`Добро пожаловать, ${userName}`);
alert(`Ваше количество оборотов вокруг солнца - ${userAge}`);

// Задание 2:

// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);   undefined
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3); NaN
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');
// ```

const a = 13;
const b = 5;
console.log(a % b);

const c = 89543;
console.log(c);
console.log(c % 2);
console.log(c % 10);

// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:

// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.

// const r = 6;
// r = 10;
// console.log(r);

const a1 = "2";
const b2 = "3";
console.log(a + b);

const a3 = +prompt("Введите a: ");
const b3 = +prompt("Введите b: ");
console.log(`Сумма чисел равна ${a3 + b3}.
Разность чисел равна ${a3 - b3}.
Произведение чисел равно ${a3 * b3}.
Частное чисел равно ${a3 / b3}.
Остаток от деления чисел равен  ${a3 % b3}.`);

console.log(String(true));
console.log("a" + true);
console.log(Number(true));
console.log(true + 1);
console.log(true + true);
console.log(true - true);
console.log(String(true) + Number(true));

// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

const num = +prompt("Введите число");

if (num > 5) {
    console.log("Число больше 5");
} else if (num < 5) {
    console.log("Число меньше 5");
} else {
    console.log("Число равно 5");
}

// num > 5
//   ? console.log("Число больше 5")
//   : num < 5
//   ? console.log("Число меньше 5")
//   : console.log("Число равно 5");

const test1 = 99;
const test2 = 99;

console.log(test1 === test2 ? "Равны" : "Разные");

const a4 = +prompt("Введите число a: ");
const b4 = +prompt("Введите число b: ");

console.log(`Минимальное число: ${Math.min(a4, b4)}`);

const num1 = +prompt("Введите число больше нуля и меньше 15: ");
console.log(
    num1 > 0 && num1 < 15
        ? `Спасибо за число ${num1}`
        : `А вы, я смотрю, хулиганите! ${num1} - неверное значение.`
);
