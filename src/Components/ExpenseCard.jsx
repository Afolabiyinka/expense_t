import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Trash,
} from "lucide-react";
import { Tooltip, IconButton, Accordion } from "@mui/material";
import { useCategory } from "../Context/Categories";
import { NumericFormat } from "react-number-format";
import { useState } from "react";

const ExpenseCard = ({ transaction }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedCat } = useCategory();

  function handleClick() {
    setIsHovered(true);
    if (isHovered) {
      setIsHovered(false);
    }
  }
  return (
    <motion.div
      className="cursor-pointer w-full  shadow rounded-3xl relative transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className=" px-4 py-4 flex items-center justify-between gap-3 relative">
        <div className="flex gap-2 items-center">
          <div className="p-1.5  rounded-full border">
            <ArrowUp />
          </div>
          <div className="flex flex-col  w-full">
            <h2 className="font-semibold">{transaction?.name}</h2>
          </div>
        </div>

        <NumericFormat
          value={transaction?.amount || 0}
          thousandSeparator
          prefix="₦"
          displayType="text"
          className={`text-xl  ${
            transaction?.status ? "text-red-600" : "text-green-500"
          }`}
        />
        <button
          className=" bottom-0 right-[10rem] md:right-[38rem] absolute hover:bg-gray-200 font-bold rounded-full active:rotate-180 cursor-pointer"
          onClick={handleClick}
        >
          {isHovered ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
        </button>
      </div>

      <AnimatePresence
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <motion.div className="">
          {isHovered && (
            <div className="p-3 w-full justify-between flex gap-8 items-center">
              {/* <p>{transaction.desc}</p> */}
              <p>{selectedCat || "No Category"}</p>
              <Tooltip title="Delete" placement="top">
                <IconButton className="p-2 rounded-full h-12 w-12 flex justify-center items-center bg-gray-400  shadow">
                  <Trash color="red" className="stroke-[2px]" />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpenseCard;
