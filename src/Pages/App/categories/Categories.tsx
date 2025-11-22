import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useTransactionsHook } from "../Finances/Hooks/FinancesContext";
import Categorycard from "./components/categorycard";
import CustomBtn from "../../Website/Components/CustomBtn";

const Categories: React.FC = ({}) => {
  const { categories, deleteCategory } = useTransactionsHook();

  return (
    <div className="flex flex-col justify-center items-center  w-full h-full pt-[45rem] md:pt-0 ">
      <h1 className="text-3xl font-mono mb-8 p-4">
        You can add, delete and create a category here!
      </h1>
      <div className="w-full rounded-3xl p-6 flex flex-col justify-center gap-6 cursor-pointer">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <Categorycard
              category={category}
              onClick={() => deleteCategory(category.id)}
            />
          ))}
        </div>
        <CustomBtn text="Add a new Category" isSolid />
      </div>
    </div>
  );
};

export default Categories;
