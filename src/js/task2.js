console.log('Task 2');

// Import users from json
import users from '../data/users.json';

/*
 * Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.
 */

const toggleUserState = (allUsers, userName) => {
    return new Promise(resolve => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );

        resolve(updatedUsers);
    });
};

const logger = updatedUsers => console.table(updatedUsers);
/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
