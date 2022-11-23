import React, { useLayoutEffect } from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


function ExpensesList(props){
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }
  return <ul className="expenses-list">
    { props.items.map((item) => {
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
  </ul>
}

export default ExpensesList;