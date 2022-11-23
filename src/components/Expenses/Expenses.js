import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
  const expenses = props.items;

  const [filteredYear, setFilteredYear] = React.useState("All");

  function filterChangeHandler(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredYear === "All" ? (
          expenses.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                id={item.id}
                amount={item.amount}
                date={item.date}
                title={item.title}
              />
            );
          })
          
        ) : (
          <ExpensesList items={filteredExpenses} />
        )}
      </Card>
    </div>
  );
}

export default Expenses;
