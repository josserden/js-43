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

input.addEventListener('input', _.throttle(onInput, 800));

function onInput(event) {
    const request = event.target.value.trim().toLowerCase();

    console.log(request);

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
