const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
const balanceDisplay = document.getElementById('balance');
const incomeDisplay = document.getElementById('income');
const expenseDisplay = document.getElementById('expense');
const transactionList = document.getElementById('transactionList');

function renderTransactions() {
    transactionList.innerHTML = '';
    let balance = 0;
    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.textContent = `${transaction.description}: $${transaction.amount}`;
        transactionList.appendChild(transactionItem);

        if (transaction.type === 'income') {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

        balance = income - expense;
    });

    balanceDisplay.textContent = `Balance: $${balance}`;
    incomeDisplay.textContent = `Income: $${income}`;
    expenseDisplay.textContent = `Expense: $${expense}`;
}

function addTransaction(description, amount, type) {
    const transaction = {
        description,
        amount: parseFloat(amount),
        type
    };
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    renderTransactions();
}

document.getElementById('addTransactionButton').addEventListener('click', () => {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    addTransaction(description, amount, type);
});

renderTransactions();
