//Imports
import { calculateAge } from './js/helpers/calculateAge.js';
import { isBirthday } from './js/helpers/isBirthday';
import { dateFormat } from './js/helpers/dateFormat';

// Data
import employees from './data/employees.json';
import comments from './data/comments.json';

document.querySelector('.js-table').innerHTML = prepareTableMarkup();

function prepareTableMarkup() {
    return employees
        .map(({ username, birthDay }, index) => {
            return `
            <tbody>
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${username}</td>
                <td>${calculateAge(birthDay)}</td>
                <td>${isBirthday(birthDay) ? 'Yes' : 'No'}</td>
              </tr>
          <tbody>
    `;
        })
        .join('');
}

document.querySelector('.list').innerHTML = prepareListMarkup();

function prepareListMarkup() {
    return comments
        .map(({ author, content, createdAt }) => {
            return `
                <div class="card">
                  <div class="card-body">
                      <span class="text-muted">автор</span>
                      <h5 class="card-title">${author}</h5>
                      <p class="card-text">${content}</p>
                  </div>
                <div class="card-footer text-muted">posted ${dateFormat(
                    createdAt,
                )}</div>
              </div>
            `;
        })
        .join('');
}
