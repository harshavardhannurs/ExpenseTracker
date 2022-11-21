import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.items;
  return (
    <Card className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            amount={item.amount}
            date={item.date}
            title={item.title}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
