import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  function saveExpenseDataHandler(enteredExpenseData){
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData)
    setExpand(false)
  }

  const [isExpand, setExpand] = React.useState(false);

  function clickHandler(){
    setExpand(true)
  }

  function handleCancel(){
    setExpand(false)
  }

  return (
    <div className="new-expense">
    {!isExpand && <button onClick={clickHandler}>Add new expense</button>}
    {isExpand && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleCancel} />}
    </div>
  );
}

export default NewExpense;
