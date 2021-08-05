import React, { useState } from "react";

import Card from "../UI/Card"; //this allows us to replace a div with a re-usable card component
import "./Expenses.css";
// importing filter
import ExpensesFilter from "../Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart";

// const Expenses = (props) => {
//   return (
//     <div>
//       <ExpensesFilter />
//       <Card className="expenses">
// {props.expenses.map((item) => (
//   <ExpenseItem
//     title={item.title}
//     amount={item.amount}
//     date={item.date}
//   />
//         ))}
//       </Card>
//     </div>
//   );
// };

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const yearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredArray = props.expenses.filter((filter) => {
    return filter.date.getFullYear() === parseInt(filteredYear);
    // console.log(word.date.getFullYear());
  });

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredArray.length > 0) {
  //     expensesContent = filteredArray.map((item) => (
  //       <ExpenseItem
  //         // with adding key, this fixes an issue with react rendering and updating all divs displaying the expenses.
  //         // now react can see that every div has a unique id, without this it will update all divs on in this <Card /> class.
  //         // you can also use props.expenses.map((item, index)) although less optimal

  //         key={item.id}
  //         title={item.title}
  //         amount={item.amount}
  //         date={item.date}
  //       />
  //     ));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSavingYearData={yearHandler}
        />
        {/* We take out the code below, add it above into a variable. 
        Then point towards {expenses content} to remove excess JSX code */}
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList items={filteredArray} />

        {/* {expensesContent} */}

        {/* turnary expression below */}
        {/* {filteredArray.length === 0 ? (<p>No expenses Found.</p>)} */}
        {/* if the && condition is met, it automatically moves onto the second option. 
        This allows us to write shorter expressions */}
        {/* If the part before && is true, the part after is triggered  */}
        {/* {filteredArray.length === 0 && <p>No expenses found.</p>}
        {filteredArray.length > 0 &&
          filteredArray.map((item) => (
            <ExpenseItem
              // with adding key, this fixes an issue with react rendering and updating all divs displaying the expenses.
              // now react can see that every div has a unique id, without this it will update all divs on in this <Card /> class.
              // you can also use props.expenses.map((item, index)) although less optimal

              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))} */}

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        */}
      </Card>
    </div>
  );
}

export default Expenses;
