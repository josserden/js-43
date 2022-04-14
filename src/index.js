import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';
import * as APIservice from './js/service/api-service';
import { getRefs } from './js/getRefs';
import { renderContacts } from './js/renderContacts';

const { contactsContainer } = getRefs();

// GET /api/contacts
APIservice.getContacts().then(contacts => {
  renderContacts(contactsContainer, contacts);
});

contactsContainer.addEventListener('click', async event => {
  const index = event.target.dataset.id;
  if (!index) return;

  try {
    await APIservice.deleteContact(index);

    event.target.parentNode.parentNode.remove();
  } catch (error) {
    console.error(error);
  }
});

// GET /api/contacts/:id
// APIservice.getContact(7);
// APIservice.getContact(13).then(contact => {
//   console.log(contact);
// });

// POST /api/contacts
// APIservice.createContact({
//   name: 'Gosho',
//   phone: '0888888888',
//   email: 'gosho@mail.com',
// }).then(contact => {
//   console.log(contact);
// });

// DELETE /api/contacts/:id
// APIservice.deleteContact(29).then(contact => console.log(contact));
// APIservice.deleteContact(22);
// APIservice.deleteContact(6).then(data => console.log(data));

// PUT /api/contacts/:id
// APIservice.updateContact(18, {
//   name: 'Diana',
//   number: '077-999-6677',
//   email: 'super_manager@mail.com',
// });
