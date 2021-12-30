//todo  Глубокая деструктуризация
/*
 * Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
 */

function getBotReport({ companyName, stock }) {
    let total = 0;

    for (const value of Object.values(stock)) {
        total += value;
    }
    return `${companyName} has ${total} elements in stock`;
}

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
console.log(
    getBotReport({
        companyName: 'Cyberdyne Systems',
        stock: {
            repair: 150,
            defence: 50,
        },
    }),
); // "Cyberdyne Systems has 200 bots in stock"

console.log(
    getBotReport({
        companyName: 'Babushka',
        stock: {
            tomato: 150,
            eggs: 50,
            meat: 200,
        },
    }),
);
