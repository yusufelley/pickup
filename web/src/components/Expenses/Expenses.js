import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const saveYearData = (yearData) => {
    setYear(yearData);
  };

  const filteredExpenses = props.items.filter(
    (expensesByYear) => expensesByYear.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={year} onYearChangeData={saveYearData} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
