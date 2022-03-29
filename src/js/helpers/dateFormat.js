import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export function dateFormat(date) {
    return format(new Date(date), 'MM MMM Y', { locale: uk });
}
