// todo Массивы и циклы
/*
 *Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split(',');
const phonesArr = phones.split(',');

for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
}

// for (let i = 0; i < namesArr.length; i++) {
//     for (let j = 0; j < phonesArr.length; j++) {
//         console.log(`${namesArr.shift()} - ${phonesArr[j]}`);
//     }
// }
