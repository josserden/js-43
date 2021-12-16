// todo Отображение времени (if...else)
/*
 * Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.
 */

// const hours = 14;
// const minutes = 26;
// let timeString;

// if (minutes === 0) {
//     timeString = `${hours} ч.`;
// } else {
//     timeString = `${hours} ч. ${minutes} мин.`;
// }

// console.log(timeString);

function logTime(hours, minutes) {
    if (minutes === 0) {
        console.log(`${hours} ч.`);
    } else {
        console.log(`${hours} ч. ${minutes} мин.`);
    }
}

logTime(14, 26);

logTime(4, 45);
