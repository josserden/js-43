//todo Операция rest
/*
 * Напиши функцию transformId(user) так, чтобы она возвращала новый объект со свойством fullName, вместо firstName и lastName.
 */

function transformId({ firstName, lastName, ...otherParams }) {
    return {
        fullName: `${firstName} ${lastName}`,
        ...otherParams,
    };

    console.log(o);
}

console.log(
    transformId({
        id: 1,
        firstName: 'Jacob',
        lastName: 'Mercer',
        email: 'j.mercer@mail.com',
        friendCount: 40,
    }),
);

console.log(
    transformId({
        id: 2,
        firstName: 'Adrian',
        lastName: 'Cross',
        email: 'a.cross@hotmail.com',
        friendCount: 20,
    }),
);
