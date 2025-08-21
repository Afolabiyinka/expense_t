import React from "react";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";
import { IconButton } from "@mui/material";

const MoneyCard = ({ income = true, amount = 15000 }) => {
  return (
    <div className="relative border border-gray-200 shadow text-white rounded-3xl w-[15rem] md:p-3.5  p-2 flex bg-black/90">
      <IconButton color={income ? "success" : "error"} size="large">
        {income ? <p>+</p> : <p>-</p>}
      </IconButton>
      <span className="flex items-center justify-center  gap-1 text-lg ml-2">
        <span className="text-[1rem]">₦</span>
        <p className="text-[1.7rem] tracking-widest">{amount}</p>
      </span>
      <p className="fixed bottom-9 text-sm font-light right-3">NGN</p>
    </div>
  );
};

export default MoneyCard;
