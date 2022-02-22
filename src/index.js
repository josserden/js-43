import { differenceInCalendarYears, getDate, getMonth } from 'date-fns';
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
                      <h5 class="card-title">Special title treatment</h5>
                      <p class="card-text">
                          content
                      </p>
                  </div>
                <div class="card-footer text-muted"> posted 2 days ago</div>
              </div>
            `;
        })
        .join('');
}
