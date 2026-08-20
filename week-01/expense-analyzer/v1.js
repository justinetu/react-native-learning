/*

Build:

Expense Analyzer v1
It should contain at least 5 expenses.

Your program should be able to:

1. Calculate total expenses
calculateTotalExpenses()
2. Calculate average expense
calculateAverageExpense()
3. Find the largest expense
getLargestExpense()
4. Find the smallest expense
getSmallestExpense()
5. Print a summary

Something like:
===== EXPENSE SUMMARY =====

Total: $430
Average: $86
Largest: $200
Smallest: $15

*/

const expenses = [
    {
        category: "Entertainment",
        description: "Netflix",
        amount: 80
    },
    {
        category: "Gas",
        description: "Shell",
        amount: 75
    },
    {
        category: "Transportatiom",
        description: "Uber",
        amount: 105
    },
    {
        category: "Groceries",
        description: "HEB",
        amount: 240
    }
]

function calculateTotalExpenses(){
    
    let total = 0;

    for(let expense of expenses){
        total += expense.amount;
    }
    return total;
}

function calculateAverageExpense(){

    let total = calculateTotalExpenses();
    let average = total / expenses.length;

    return average;
}

function getLargestExpense(){

    let largest = expenses[0].amount;

    for(let i = 1; i < expenses.length; i++){
        if(expenses[i].amount > largest){
            largest = expenses[i].amount;
        }
    }
    return largest;
}

function getSmallestExpense(){
    let smallest = expenses[0].amount;

    for(let i = 1; i < expenses.length; i++){
        if(expenses[i].amount < smallest){
            smallest = expenses[i].amount;
        }
    }
    return smallest;
}

const  printSummary = () => {
    console.log('===== EXPENSE SUMMARY =====');
    console.log("Total: $" + calculateTotalExpenses());
    console.log("Average: $" + calculateAverageExpense());
    console.log("Largest: $" + getLargestExpense());
    console.log("Smallest: $" + getSmallestExpense());
}

printSummary();