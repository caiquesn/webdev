let money = {
    incomes: [1000,2000,500,500.5], 
    expenses: [320.6, 4000, 110.9, 800]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(money.incomes)
    const calculateExpenses = sum(money.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >=0

    let balanceText = 'negativo'

    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: R$${total}`)
}

calculateBalance()