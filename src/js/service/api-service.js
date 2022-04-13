import axios from 'axios';

// const BASE_URL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// GET /api/contacts
export const getContacts = () => {
  return axios.get('/contacts');
  //   return fetch(`${BASE_URL}/contacts`).then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return response.json();
  //   });
};

// GET /api/contacts/:id
export const getContact = id => {
  return axios.get(`/contacts/${id}`);
  //   return fetch(`${BASE_URL}/contacts/${id}`).then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return response.json();
  //   });
};

// POST /api/contacts
export const createContact = contact => {
  return axios.post('/contacts', contact);
  //   return fetch(`${BASE_URL}/contacts`, {
  //     method: 'POST',
  //     body: JSON.stringify(contact),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   }).then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     return response.json();
  //   });
};

// DELETE /api/contacts/:id
export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
  //   return fetch(`${BASE_URL}/contacts/${id}`, {
  //     method: 'DELETE',
  //   }).then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return response.json();
  //   });
};

// PUT /api/contacts/:id
export const updateContact = (id, contact) => {
  return axios.put(`/contacts/${id}`, contact);
  //   return fetch(`${BASE_URL}/contacts/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(contact),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   }).then(response => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return response.json();
  //   });
};
