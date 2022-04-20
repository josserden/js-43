import './sass/main.scss';

const form = document.querySelector('.form');

initForm();

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${key}-${value}`));
});

form.addEventListener('reset', () => {
  localStorage.removeItem('selectedFilters');
});

form.addEventListener('change', event => {
  // console.log(event.target.name);
  // console.log(event.target.value);

  let parsedFilters = localStorage.getItem('selectedFilters');

  parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};

  parsedFilters[event.target.name] = event.target.value;

  if (parsedFilters) {
    localStorage.setItem('selectedFilters', JSON.stringify(parsedFilters));
  }
});

function initForm() {
  let parsedFilters = localStorage.getItem('selectedFilters');

  if (parsedFilters) {
    parsedFilters = JSON.parse(parsedFilters);

    // console.log(parsedFilters);

    Object.entries(parsedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
