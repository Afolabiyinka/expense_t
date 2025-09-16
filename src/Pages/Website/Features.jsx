import { motion } from "framer-motion";
import { DollarSign, GitGraph, PieChart, BarChart } from "lucide-react";
import featuresSvg from "../../assets/undraw_personal-goals_f9bb.svg";

const Features = () => {
  const FEATUREITEMS = [
    { title: "Smart Budgeting", icon: DollarSign },
    { title: "Track Your Expenses", icon: PieChart },
    { title: "Visual Spending Insights", icon: BarChart },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10 py-12 w-full">
      <motion.div
        className="flex flex-col gap-5 lg:w-[50%] justify-center"
        initial="hidden"
        whileInView="visible"
        onViewportEnter="visible"
      >
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Why Choose Our Expense Tracker?
        </h1>
       <span className="flex flex-col gap-6">
         {FEATUREITEMS.map(({ title, icon: Icon }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-3 px-4 py-5 rounded-2xl shadow-md border border-white bg-white"
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <Icon className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-medium text-gray-800">{title}</span>
          </motion.div>
        ))}
       </span>
      </motion.div>

      <motion.div
        className="w-full lg:w-[50%] flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <img
          src={featuresSvg}
          alt="Illustration showing goal setting and personal finance tracking"
          className="w-full max-w-md object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Features;
