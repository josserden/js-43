import { differenceInCalendarYears } from 'date-fns';

export function calculateAge(birthDay) {
    return differenceInCalendarYears(new Date(), new Date(birthDay));
}
