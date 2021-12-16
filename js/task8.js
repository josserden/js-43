// todo Дедлайн сдачи проекта (switch)
/*
 * Выполни рефакторинг кода задачи номер 6 используя switch.
 */

const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//     console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Послезавтра');
// } else {
//     console.log('Дата в будущем');
// }

switch (daysUntilDeadline) {
    case 0:
        console.log('Сегодня');
        break;
    case 1:
        console.log('Завтра');
        break;
    case 2:
        console.log('Послезавтра');
        break;

    default:
        console.log('Дата в будущем');
        break;
}
