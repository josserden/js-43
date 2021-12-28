//todo Основы объектов
/*
 * Напиши скрипт, который, для объекта user, последовательно:

* добавляет поле mood со значением 'happy'
* заменяет значение hobby на 'skydiving'
* заменяет значение premium на false
* выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

const user = {
    name: 'John',
    age: 21,
    hobby: 'css',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

// console.log(keys);

for (const key of keys) {
    console.log(`${key} : ${user[key]}`);
}

console.log(user);
