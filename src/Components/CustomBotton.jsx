import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CustomBotton = ({ text, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={path || null}
        className="bg-purple-700 text-white px-6 cursor-pointer py-3 rounded-full font-bold hover:bg-purple-600 hover:shadow transition duration-300 flex gap-3 items-center"
      >
        {text}{" "}
        <ArrowRight
          className={`rounded-full border h-8  w-8 p-1 ${
            isHovered ? "translate-x-2" : "translate-0"
          }`}
        />
      </Link>
    </button>
  );
};

export default CustomBotton;
