const contacts = [
    'Malcolm Wilkinson',
    'Sawyer Wolf',
    'Ori Lott',
    'Alec Roach',
    'Reece Chase',
    'Laurel Chavez',
    'Matthew Mercer',
    'Ina Roth',
    'Brett Garrison',
    'Thane Saunders',
    'Hope Alford',
    'Vernon Brown',
];

const input = document.querySelector('.input');
const contactsList = document.querySelector('.contacts-list');

input.addEventListener('input', onInput);

function onInput(event) {
    const request = event.target.value.trim();

    const filteredContacts = contacts.filter(contact =>
        contact.toLowerCase().includes(request),
    );

    renderContacts(filteredContacts);
}

renderContacts(contacts);

function renderContacts(contacts) {
    contactsList.innerHTML = '';
    const markup = contacts.map(contact => `<li>${contact}</li>`).join('');

    contactsList.insertAdjacentHTML('beforeend', markup);
}
