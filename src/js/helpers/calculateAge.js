import { differenceInCalendarYears } from 'date-fns';

export function calculateAge(birthday) {
    return differenceInCalendarYears(new Date(), new Date(birthday));
}
