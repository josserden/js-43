import { differenceInCalendarYears, getDate, getMonth, format } from 'date-fns';
import { uk } from 'date-fns/locale';
import employees from './data/employees.json';
import comments from './data/comments.json';

document.querySelector('.table').innerHTML = prepareTableMarkup();

function prepareTableMarkup() {
    return employees
        .map(employee => {
            return `
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Имя</td>
                <td>Возраст</td>
                <td>Да/Нет</td>
              </tr>
          <tbody>
    `;
        })
        .join('');
}

function calculateAge(birthday) {}

function isBirthday(date) {}

document.querySelector('.list').innerHTML = prepareListMarkup();

function prepareListMarkup() {
    return comments
        .map(comment => {
            return `
                <div class="card">
                  <div class="card-body">
                      <span class="text-muted">автор</span>
                      <h5 class="card-title">Автор</h5>
                      <p class="card-text">content</p>
                  </div>
                <div class="card-footer text-muted">posted</div>
              </div>
            `;
        })
        .join('');
}

function dateFormat(time) {}
