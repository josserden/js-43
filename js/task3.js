//todo Коллбек функции
/*
 * Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова колбека.
 */

function each(array, callback) {
    const newArray = [];

    for (const element of array) {
        newArray.push(callback(element));
    }

    return newArray;
}

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
        return Math.floor(value);
    }),
);
