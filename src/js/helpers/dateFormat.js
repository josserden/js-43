import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export function dateFormat(time) {
    return format(new Date(time), 'dd MMM yyy, HH:mm', { locale: uk });
}
