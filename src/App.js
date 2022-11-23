import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [items, setItems] = React.useState([...dummyExpenses]);

  function addExpenseHandler(expenseItem){
    setItems((prev)=>{
      return [expenseItem, ...prev]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={items}/>
    </div>
  );
  //The alternative for the above JSX code would be, 
  // Syntax:- Import React from 'react'
  // React.createElement(element_name, object with attributes of that element, anything inbetween closing div tag)
  // return React.createElement('div', {}, React.createElement('h1', {}, 'Expense tracker'), React.createElement(Expenses, {item:expenses}))
}
//The approach for building an UI from smalller building blocks is called composition.

export default App;
