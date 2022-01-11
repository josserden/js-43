//todo Метод forEach
/*
 * Выполните рефакторинг кода используя метод forEach и стрелочные функции.
 */

const logItems = items => {
    // console.log(items);

    // for (let i = 0; i < items.length; i += 1) {
    //     console.log(`${i + 1} - ${items[i]}`);
    // }

    items.forEach((element, index) => {
        console.log(`${index + 1} - ${element}`);
    });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
