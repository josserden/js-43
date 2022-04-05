import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { fetchUser } from './js/service/api';
import { renderUser } from './js/renderUser';
import { showError } from './js/showError';

const searchBox = document.querySelector('.js-search-form');

searchBox.addEventListener('submit', e => {
  e.preventDefault();

  const searchRequest = searchBox.elements.name.value.trim();

  if (!searchRequest) return alert('Please enter a username');

  fetchUser(searchRequest).then(renderUser).catch(showError);

  searchBox.reset();
});
