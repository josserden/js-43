// todo  Toggle

/*
 * Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.
 */

class Toggle {
    constructor({ isOpen = false } = {}) {
        this.on = isOpen;
    }

    toggle() {
        this.on = !this.on;
    }
}

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

// document.querySelector('.first-toggle').addEventListener('click', e => {
//     firstToggle.toggle();

//     e.currentTarget.textContent = firstToggle.on ? 'открыть' : 'закрыть';
// });

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');

// document.querySelector('.second-toggle').addEventListener('click', e => {
//     secondToggle.toggle();

//     e.currentTarget.textContent = secondToggle.on ? 'открыть' : 'закрыть';
// });
