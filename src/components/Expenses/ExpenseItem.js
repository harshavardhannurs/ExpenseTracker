import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props){
  return (
    //Now the custom React wrapper component doesn't support className property. To ensure that the className can be set for our custom components and has an affect, we make changes to Card component 
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
