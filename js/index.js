const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const formRef = document.querySelector('.form');
const listRef = document.querySelector('.list');
const totalAmountRef = document.querySelector('.total-amount');

const account = {
    balance: 0,
    transactions: [],

    getBalance() {
        return this.balance;
    },

    createTransaction(amount, type) {
        return {
            id: generateId(),
            type,
            amount,
        };
    },

    deposit(amount) {
        this.balance += amount;
        const newTransaction = this.createTransaction(
            amount,
            Transaction.DEPOSIT,
        );
        this.transactions.push(newTransaction);
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

    const userInput = event.currentTarget.elements.amount.value;

    if (!userInput) return;

    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = userInput;

    listRef.append(item);

    account.deposit(Number(userInput));
    totalAmountRef.textContent = account.getBalance();

    formRef.reset();
});
