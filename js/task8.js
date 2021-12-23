// todo Форматирование времени
/*
 * Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.
 */

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);

    return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
