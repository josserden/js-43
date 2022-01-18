//todo Метод filter

/*
*
Создайте объект calculator с тремя методами:

* read(a, b)- принимает два значения и сохраняет их как свойства объекта.
* add() - возвращает сумму сохранённых значений.
* mult() - перемножает сохранённые значения и возвращает результат.
*/

/*
 * Пусть функция filterByPrice возвращает массив автомобилей, цена которых меньше чем значение параметра threshold.
 */

const calculator = {
    x: 0,
    y: 0,

    read(firstValue, secondValue) {
        this.x = firstValue;
        this.y = secondValue;
    },

    add() {
        return this.x + this.y;
    },

    mult() {
        return this.x * this.y;
    },
};

// calculator.read(5, 10);
// console.log(calculator.add());

// calculator.read(50, 90);
// console.log(calculator.add());
// console.log(calculator.mult());
