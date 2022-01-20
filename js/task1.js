//todo Блоггер

/*
* Напиши класс Blogger для создания объекта блогера со следующим свойствами:

* email - почта, строка
* age - возраст, число
* numberOfPosts - кол-во постов, число
* topics - массив тем на которых специализируется блоггер
* Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

* Добавь метод getInfo(), который возвращает строку:
* Blogger ${почта} is ${возраст} years old and has ${кол-во постов} posts.

* Добавь метод updatePostCount(value), который в параметре value
* принимает количество постов которые нужно добавить пользователю.
*/

// class Blogger {
//     constructor({ name, age, numberOfPosts, topics }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());

// Код из конспекта не работает, можете обяснить?
class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}

class ContentEditor extends User {
    constructor({ email, posts }) {
        // Вызов конструктора родительского класса User
        super(email);
        this.posts = posts;
    }
}

const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email);
