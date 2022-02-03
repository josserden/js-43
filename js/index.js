const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const formRef = document.querySelector('.form');
const listRef = document.querySelector('.list');
const totalDepositRef = document.querySelector('.total-deposit');
const totalWithdrawRef = document.querySelector('.total-withdraw');

const account = {
    balance: 0,
    transactions: [],

    getBalance() {
        return this.balance;
    },

    createTransaction(amount, type, description) {
        return {
            id: generateId(),
            type,
            amount,
            description,
        };
    },

    deposit(amount, description) {
        this.balance += amount;
        const newTransaction = this.createTransaction(
            amount,
            Transaction.DEPOSIT,
            description,
        );

        this.transactions.push(newTransaction);
    },

    withdraw(amount, description) {
        // if (amount > this.balance) {
        //     return;
        // }

        this.balance -= amount;
        const newTransaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW,
            description,
        );

        this.transactions.push(newTransaction);
    },

    getTransactionTotal(type) {
        return this.transactions.reduce((acc, item) => {
            if (type === item.type) {
                acc += item.amount;
            }

            return acc;
        }, 0);
    },
};

function generateId() {
    return (
        String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
        Math.random().toString(16).slice(2) +
        Date.now().toString(16).slice(4)
    );
}

formRef.addEventListener('submit', event => {
    event.preventDefault();

    const description = event.currentTarget.elements.description.value;
    const amount = Number(event.currentTarget.elements.amount.value);

    if (!description || !amount) return;

    // if (amount < 0) {
    //     account.withdraw(amount,description));
    // } else {
    //     account.deposit(amount,description));
    // }

    amount < 0
        ? account.withdraw(amount, description)
        : account.deposit(amount, description);

    totalWithdrawRef.textContent = account.getTransactionTotal(
        Transaction.WITHDRAW,
    );

    totalDepositRef.textContent = account.getTransactionTotal(
        Transaction.DEPOSIT,
    );

    const markup = account.transactions
        .map(object => renderOperation(object))
        .join('');

    listRef.innerHTML = markup;

    formRef.reset();
});

function renderOperation({ description, amount }) {
    const className = amount < 0 ? 'item-minus' : 'item-plus';

    return `<li class="item ${className}">
    <p>${description}</p>
    <p>${amount}</p>
  </li>`;
}
