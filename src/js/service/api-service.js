import axios from 'axios';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// GET /api/contacts
export const getContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

// GET /api/contacts/:id
export const getContact = async id => {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;
};

// POST /api/contacts
export const createContact = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

// DELETE /api/contacts/:id
export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);

  return data;
};

// PUT /api/contacts/:id
export const updateContact = async (id, contact) => {
  const { data } = await axios.put(`/contacts/${id}`, contact);

  return data;
};
