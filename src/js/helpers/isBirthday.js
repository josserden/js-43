import { getDate, getMonth } from 'date-fns';

export function isBirthday(date) {
    const today = new Date();
    const birthday = new Date(date);

    return (
        getDate(today) === getDate(birthday) &&
        getMonth(today) === getMonth(birthday)
    );
}
