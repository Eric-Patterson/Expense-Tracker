import React, { useState } from "react";

// importing expenses
import Expenses from "./components/Expenses/Expenses";

// importing expense form
import NewExpense from "./components/NewExpense/NewExpense";

// importing year filter
// import ExpenseFilter from "./components/Filter/ExpenseFilter";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // this adds the divs dynamically onto the page
  const addExpenseHandler = (expense) => {
    // console.log("in app.js");
    console.log(expense);
    setExpenses((prevExepenses) => {
      return [expense, ...prevExepenses];
    });
  };
  return (
    <div>
      {/* <ExpenseFilter /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

// ==========================================================
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Let's get started!"),
//   React.createElement(Expenses, { expenses: expenses })
// );

// ============== THIS ABOVE IS EQUAL TO THIS ==============
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <Expenses expenses={expenses} />
//     </div>
//   );
// }
// =========================================================
