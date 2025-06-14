import React from "react";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { IconButton } from "@mui/material";

const MoneyCard = ({ income = true, amount = 12000 }) => {
  return (
    <div className="border w-[15rem] rounded-xl p-2 flex h-[4.5rem] items-center gap-2 shadow-sm">
      <IconButton color={income ? "success" : "error"}>
        {income ? <ArrowUp /> : <ArrowDown />}
      </IconButton>
      <span className="flex items-center gap-1.5 text-lg font-semibold">
        <DollarSign size={20} />
        <p>{amount}</p>
      </span>
    </div>
  );
};

export default MoneyCard;
