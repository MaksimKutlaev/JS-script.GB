"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

let dayNumber = Number(promt('Введите число от 1 до 32'));
if (dayNumber >= 1 && dayNumber < 32) {
    let decade;
    
    if (dayNumber <= 10) {
        decade = 1;
    } else if (dayNumber <= 20) {
        decade = 2;
    } else {
        decade = 3;
    }
    
    console.log(`Число ${dayNumber} попадает в ${decade} декаду месяца.`);
} else {
    console.log("Неверное значение.");
}
