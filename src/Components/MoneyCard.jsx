import React from "react";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { IconButton } from "@mui/material";

const MoneyCard = ({ income = true, amount = 15000 }) => {
  return (
    <div className="border rounded-xl w-fit px-8 py-3 flex bg-gray-300 shadow-sm">
      <span className="flex items-center gap-1 text-lg">
        <span className="text-[1.7rem] font-mono font-bold">₦</span>
        <p className="text-[1.2rem] tracking-widest">{amount}</p>
      </span>
      <IconButton color={income ? "success" : "error"}>
        {income ? <ArrowUp /> : <ArrowDown />}
      </IconButton>
    </div>
  );
};

export default MoneyCard;
