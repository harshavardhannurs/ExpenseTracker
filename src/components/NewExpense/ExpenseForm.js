import React from "react";
import NewExpense from "./NewExpense";
import "./ExpenseForm.css";
import { promiseImpl } from "ejs";

function ExpenseForm(props) {
  const [item, setItem] = React.useState({
    title: "",
    amount: "",
    date: "",
  });

  function titleChangeHandler(event) {
    setItem((prev) => {
      return { ...prev, title: event.target.value };
    });
  }

  function amountChangeHandler(event) {
    setItem((prev) => {
      return { ...prev, amount: event.target.value };
    });
  }

  function dateChangeHandler(event) {
    setItem((prev) => {
      return { ...prev, date: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const itemToBeAdded = {
      title: item.title,
      amount: +item.amount,
      date: new Date(item.date),
    };

    props.onSaveExpenseData(itemToBeAdded);

    console.log(itemToBeAdded);
    setItem({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={item.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={item.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={item.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">
          Add expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
