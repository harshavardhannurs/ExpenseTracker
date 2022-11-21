import React from "react";
import './Card.css'

function Card(props){
  const classes = 'card '+props.className;
  return <div className={classes}>{props.children}</div>
}

export default Card;

//The Card component acts as a shell for ExpenseItem component or Expense component
//The props.children is nothing but the content between <Card></Card>. Now this content can be other custom React components or HTML tags.