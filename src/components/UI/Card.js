//this allows us to replace a div with a re-usable card component
//We are using this in expenseItem.js and Expeses.js
import React from "react";

import "./Card.css";

const Card = (props) => {
  // children is a reserved property
  // allows you to wrap other Classes such as Card wrapping ExpenseDate

  // any value set to the class name prop, aka Card is added onto it
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
