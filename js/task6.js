// todo Поиск наибольшего элемента
/*
 * Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
 */

function findLargestNumber(numbers) {
    let largestNumber = numbers[0];

    for (const number of numbers) {
        if (largestNumber < number) {
            largestNumber = number;
        }
    }

    return largestNumber;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
