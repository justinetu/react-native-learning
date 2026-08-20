/*

Day 4 — Your First Mini Application
We're going to make a tiny Expense Analyzer.

Start with:
const expenses = [
  {
    description: "Groceries",
    amount: 75,
    category: "Food"
  },
  {
    description: "Gas",
    amount: 40,
    category: "Transportation"
  },
  {
    description: "Netflix",
    amount: 15,
    category: "Entertainment"
  }
];

Write a function:
calculateTotalExpenses()
It should return:
130
Then write:
getMostExpensiveExpense()

It should return:
{
  description: "Groceries",
  amount: 75,
  category: "Food"
}
Don't worry about using reduce() yet.
Try solving it with what you currently know.

*/

const expenses = [
  {
    description: "Groceries",
    amount: 75,
    category: "Food"
  },
  {
    description: "Gas",
    amount: 40,
    category: "Transportation"
  },
  {
    description: "Netflix",
    amount: 15,
    category: "Entertainment"
  }
];

const calculateTotalExpenses = (expenses) => {
    let total = 0;
    for(let expense of expenses){
        total += expense;
    }

    return total;
};

const getMostExpensiveExpense = (expenses) => {
    // expenses.reduce((curMostExpensive, expense) => {
    //     if(curMostExpensive.amount > expense.amount){
    //         return acc;
    //     } else {
    //         return expense;
    //     }
    // })
    let mostExpensive = expenses[0];


    for(let idx = 1; idx < expenses.length; idx++){

        if(mostExpensive.amount < expenses[idx].amount){
            mostExpensive = expenses[idx];
            // console.log(mostExpensive);
        }
        return mostExpensive;
    }
};

let res = getMostExpensiveExpense(expenses);
console.log(res);



