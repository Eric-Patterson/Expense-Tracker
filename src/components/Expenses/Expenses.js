import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; //this allows us to replace a div with a re-usable card component
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

// function Expenses(props) {
//   return (
//     <div className="expenses">
//       <ExpenseItem
//         title={props.expenses[0].title}
//         amount={props.expenses[0].amount}
//         date={props.expenses[0].date}
//       />

//       {/* <ExpenseItem
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//         date={expenses[1].date}
//       />

//       <ExpenseItem
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//         date={expenses[2].date}
//       />

//       <ExpenseItem
//         title={expenses[3].title}
//         amount={expenses[3].amount}
//         date={expenses[3].date}
//       /> */}
//     </div>
//   );
// }

export default Expenses;
