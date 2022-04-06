import { formatDistance } from 'date-fns';

export function dateFormat(date) {
  return formatDistance(new Date(), new Date(date), { addSuffix: true });
}
