import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // let expensesContent = <p>No expenses found.</p>;
  // if (props.items.length > 0) {
  //   expensesContent = ; }
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          // with adding key, this fixes an issue with react rendering and updating all divs displaying the expenses.
          // now react can see that every div has a unique id, without this it will update all divs on in this <Card /> class.
          // you can also use props.expenses.map((item, index)) although less optimal

          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
