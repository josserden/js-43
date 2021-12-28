//todo Массив объектов
/*
 * Напишите ф-цию calcTotalPrice(array, stoneName), которая принимает массив объектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из объекта
 */

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(array, stoneName) {
    let message = 'ничего не найдено';

    for (const object of array) {
        if (object.name === stoneName) {
            message = `общая стоимость ${object.name} - ${
                object.price * object.quantity
            } при стоимости ${object.price} за штуку`;
        }
    }

    return message;
}

console.log(calcTotalPrice(stones, 'Щебень'));
console.log(calcTotalPrice(stones, 'Кирпич'));
