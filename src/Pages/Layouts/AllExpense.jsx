import React from "react";
import ExpenseCard from "../../Components/ExpenseCard";

const AllExpense = () => {
  return (
    <div className="flex flex-col max-h-[70%] w-full border gap-3 rounded-xl p-6 overflow-y-scroll">
      <h1 className="text-xl">Your Expenses</h1>
      <ExpenseCard title="Food & Drinks" amount={18500} isExpense={true} />
      <ExpenseCard title="Bill Suscription" amount={18500} isExpense={false} />
      <ExpenseCard title="Bill Suscription" amount={18500} isExpense={false} />
      <ExpenseCard title="Bill Suscription" amount={18500} isExpense={false} />
    </div>
  );
};

export default AllExpense;
