import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';
import * as APIservice from './js/service/api-service';
import { getRefs } from './js/getRefs';
import { renderContacts } from './js/renderContacts';

const { contactsContainer } = getRefs();

// GET /api/contacts
APIservice.getContacts().then(contacts => {
  renderContacts(contactsContainer, contacts.data);
});

// GET /api/contacts/:id
// APIservice.getContact(13);
// APIservice.getContact(130);

// POST /api/contacts
// APIservice.createContact({
//   name: 'Maria',
//   email: 'maria@gmail.com',
//   number: '066-999-9991',
// });

// DELETE /api/contacts/:id
// APIservice.deleteContact(26);
// APIservice.deleteContact(22);
// APIservice.deleteContact(6).then(data => console.log(data));

// PUT /api/contacts/:id
// APIservice.updateContact(7, {
//   name: 'Jimmy',
//   number: '066-999-6666',
// });
