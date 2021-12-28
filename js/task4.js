//todo Комплексные задачи
/*
 * Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзакций всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type,
        };
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;

        const newTransaction = this.createTransaction(
            amount,
            Transaction.DEPOSIT,
        );

        this.transactions.push(newTransaction);

        return `Пополнение прошло успешно на сумму ${amount}$.`;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            return 'Недостаточно средств на счету!';
        }

        this.balance -= amount;

        const newTransaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW,
        );

        this.transactions.push(newTransaction);

        return `Операция прошла успешно на сумму ${amount}$.`;
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзакции по id
     */
    getTransactionDetails(id) {
        for (const object of this.transactions) {
            if (object.id === id) {
                return object;
            }
        }
        return 'такой операции нет';
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;

        for (const object of this.transactions) {
            if (object.type === type) {
                total += object.amount;
            }
        }

        return `Сумма транзакций ${type} - ${total}`;
    },
};

console.log(account.deposit(500));
console.log(account.deposit(100));
console.log(account.deposit(50));

console.log(account.withdraw(150));
console.log(account.withdraw(50));
console.log(account.withdraw(500));

// console.log(account.transactions);

// console.table(account.getTransactionDetails(10));

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account.getBalance());
