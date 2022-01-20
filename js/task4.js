// todo Заметки

/*
 * Напиши класс Notes, который управляет коллекцией заметок в свойстве items. Заметка - это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

 * Добавь методы addNote(note), removeNote(text) и updateNote(text, newPriority).
 */

class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
    };

    constructor(items = []) {
        this.items = items;
    }

    addNote(note) {
        this.items.push(note);
    }

    removeNote(text) {
        const item = this.items.find(el => el.text === text);

        if (item) {
            this.items = this.items.filter(el => el.text !== text);
        }
    }

    updateNote(text, newPriority) {
        const element = this.items.find(el => el.text === text);

        if (element) {
            element.priority = newPriority;
        }
    }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
    text: 'Моя вторая заметка',
    priority: Notes.Priority.NORMAL,
});

myNotes.removeNote('Моя первая заметка');

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);

myNotes.addNote({ text: 'Моя третья заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
    text: 'Моя четвертая заметка',
    priority: Notes.Priority.LOW,
});

console.log(myNotes.items);
