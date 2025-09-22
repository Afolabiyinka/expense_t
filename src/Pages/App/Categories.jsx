import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Trash } from "lucide-react";
import { useTransactionsHook } from "../../Context/FinancesContext";

function Categories() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const { categories } = useTransactionsHook();

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full pt-[27rem]
   md:pt-0"
    >
      <h1 className="text-3xl font-mono mb-8 p-4 rounded-full border border-gray-200">
        You can add, delete and create a category here!
      </h1>
      <div className="border border-gray-200  rounded-3xl  grid grid-cols-1 lg:grid-cols-4 gap-5  w-full p-4">
        {categories.map((category) => (
          <span
            onClick={(e) => {
              setIsHovered(true);
              setSelectedCat(e.target.value);
            }}
            key={category.id}
            className="flex gap-8 border rounded-3xl p-2  items-center w-fit justify-between hover:bg-gray-200 cursor-pointer "
          >
            <span className="flex items-center justify-center">
              <span className="p-1 rounded-full h-10 w-10 flex justify-center items-center bg-black text-white mr-2">
                {category.icon}
              </span>
              <h1>{category.title}</h1>
            </span>
            {selectedCat && (
              <span className="p-3 text-red-600 rounded-full h-10 w-10 flex justify-center items-center">
                <Trash />
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Categories;
