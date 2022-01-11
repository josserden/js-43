//todo Метод forEach
/*
 * Выполните рефакторинг кода используя метод forEach и стрелочные функции.
 */

function logItems(items) {
    console.log(items);
    for (let i = 0; i < items.length; i += 1) {
        console.log(`${i + 1} - ${items[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
