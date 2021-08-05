import React from "react";

import "./ExpenseFilter.css";
// import Expenses from "../Expenses/Expenses";

const ExpensesFilter = (props) => {
  //   const [year, setYear] = useState("");

  const yearChangeHandler = (e) => {
    // console.log(e.target.value);
    const yearData = e.target.value;
    props.onSavingYearData(yearData);
    // console.log(Expenses.props.res);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by year</label>
        <select
          className=".expenses-filter select"
          onChange={yearChangeHandler}
          value={props.selected}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
