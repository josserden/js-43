//todo  Глубокая деструктуризация
/*
 * Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
 */

function getBotReport(companyName, repairBots, defenceBots) {
    return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
console.log(
    getBotReport({
        companyName: 'Cyberdyne Systems',
        bots: {
            repair: 150,
            defence: 50,
        },
    }),
); // "Cyberdyne Systems has 200 bots in stock"
