// { useState } allows us to define values as state || allows us to update dom text such as a button adding +1 to html code and counts up
// useState us a react hook. All hooks start with use and then something else
// all hooks can only be called inside react component functions such as the one below ExpenseItem
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState needs an initial value inside the () to work
  // use state returns array, first value; variable itself, second value; updating function
  // use state ALWAYS returns 2 values. Always the first value is the variable, second is ALWAYS the function to update
  // we use array destructuring to get the values out || const [title, setTitle]
  // [title, ] is a pointer towards (props.title)
  // [, setTitle] is a function we can call later on that will update the value
  // convention on naming is something that describes the value aka [title, ] and then add on before "set" then the describing word || [, setTitle]
  // const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
