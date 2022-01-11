//todo Коллбек функции
/*
 * Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

* Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

* Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.
 */
const TRANSACTION_LIMIT = 1000;

const account = {
    balance: 400,

    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Сумма ${amount} превышает лимит ${TRANSACTION_LIMIT}`);
        } else if (amount > this.balance) {
            onError(
                `Сумма ${amount} превышает остаток на счете -  ${this.balance}`,
            );
        } else {
            this.balance -= amount;
            onSuccess(
                `Операция на сумму ${amount} выполнена. На счету -  ${this.balance}`,
            );
        }
    },

    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT) {
            onError(`Сумма ${amount} превышает лимит ${TRANSACTION_LIMIT}`);
        } else if (amount <= 0) {
            onError(`Сумма ${amount} должна быть больше 0`);
        } else {
            this.balance += amount;
            onSuccess(
                `Операция на сумму ${amount} выполнена. На счету -  ${this.balance}`,
            );
        }
    },
};

const handleSuccess = message => console.log(`✅ Success! ${message}`);

const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
