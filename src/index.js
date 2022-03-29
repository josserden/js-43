import { getDate, getMonth } from 'date-fns';
import { differenceInCalendarYears } from 'date-fns';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

// Data
import employees from './data/employees.json';
import comments from './data/comments.json';

document.querySelector('.js-table').innerHTML = prepareTableMarkup();

function prepareTableMarkup() {
    return employees
        .map(() => {
            return `
            <tbody>
              <tr>
                <th scope="row">${1}</th>
                <td>username</td>
                <td>birthDay</td>
                <td>birthDay yes/no</td>
              </tr>
          <tbody>
    `;
        })
        .join('');
}

document.querySelector('.list').innerHTML = prepareListMarkup();

function prepareListMarkup() {
    return comments
        .map(() => {
            return `
                <div class="card">
                  <div class="card-body">
                      <span class="text-muted">автор</span>
                      <h5 class="card-title">author</h5>
                      <p class="card-text">content</p>
                  </div>
                <div class="card-footer text-muted">posted created At</div>
              </div>
            `;
        })
        .join('');
}
