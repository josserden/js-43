// //todo Мастерская драгоценностей

// /*
//  * Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.
//  */

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],

//     calcTotalPrice(stoneName) {
//         const findElement = this.stones.find(
//             element => element.name === stoneName,
//         );

//         if (findElement) {
//             return findElement.price * findElement.quantity;
//         }

//         return console.log('No ok');
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Rubyfdfs')); // 1600

// const icon = {
//     _color: '#fff',
//     _size: '20px',

//     color(newColor) {
//         this._color = newColor;

//         return this;
//     },

//     size(newSize) {
//         this._size = newSize;

//         return this;
//     },
// };

// console.log(icon.color('red').size('40px'));
// console.log(icon.color('grey').size('80px'));
