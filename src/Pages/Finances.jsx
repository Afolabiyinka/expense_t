import React from "react";
import MoneyCard from "../Components/MoneyCard";
import ExpenseOverview from "./Layouts/ExpenseOverview";
import AllExpense from "./Layouts/AllExpense";

const Finances = () => {
  return (
    <div className="w-full h-full border rounded-xl flex flex-col justify-center gap-6 items-start p-3">
      <ExpenseOverview />
      <AllExpense />
    </div>
  );
};

export default Finances;
