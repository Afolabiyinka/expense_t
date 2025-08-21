import React from "react";
import MoneyCard from "../../Components/MoneyCard";
import ExpenseOverview from "./Layouts/ExpenseOverview";
import AllExpense from "./Layouts/AllExpense";

const Finances = () => {
  return (
    <div className="w-full h-full rounded-lg flex flex-col justify-center gap-3 items-start p-1">
      <ExpenseOverview />
      <AllExpense />
    </div>
  );
};

export default Finances;
