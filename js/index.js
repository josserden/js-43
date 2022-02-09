import { courses } from './courses.js';

const buttonContainerRef = document.querySelector('.buttons-container');
const coursesContainerRef = document.querySelector('.courses-container');

const filters = courses
    .flatMap(course => course.tags)
    .filter((item, index, array) => array.indexOf(item) === index);

// const filters = [...new Set(courses.flatMap(course => course.tags))];

buttonContainerRef.addEventListener('click', event => {
    const currentElement = event.target;
    const currentValue = currentElement.dataset.value;
    const activeElement = document.querySelector('.is-active');

    if (!currentValue) return;

    if (activeElement) {
        activeElement.classList.remove('is-active');
    }

    if (currentElement === activeElement) {
        return renderCourses(courses);
    }

    currentElement.classList.add('is-active');

    const filteredCourses = courses.filter(course =>
        course.tags.includes(currentValue),
    );

    renderCourses(filteredCourses);
});

renderFilters(filters);
renderCourses(courses);

function renderFilters(arrayOfBtnValue) {
    const markup = arrayOfBtnValue
        .map(
            course =>
                `<button class="button" type="button" data-value="${course}">${course}</button>`,
        )
        .join('');

    buttonContainerRef.insertAdjacentHTML('beforeend', markup);
}

function renderCourses(arrayOfCourses) {
    coursesContainerRef.innerHTML = '';

    const markup = arrayOfCourses
        .map(
            (course, index) =>
                `<div>${index + 1}. ${course.name} - ${course.prices}</div>`,
        )
        .join('');

    coursesContainerRef.insertAdjacentHTML('beforeend', markup);
}
