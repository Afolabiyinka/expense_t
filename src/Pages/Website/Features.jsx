import { motion } from "framer-motion";
import { Banknote, PiggyBank, Users } from "lucide-react";
import featuresSvg from "../../assets/undraw_personal-goals_f9bb.svg";

const Features = () => {
  const perks = [
    {
      name: "Spend your hard earned money",
      desc: "with peace of mind and think more clearly with no stress",
      icon: Banknote,
    },
    {
      name: "Save up more money ",
      desc: "to buy that house, car or whatever your financial goals are.",
      icon: PiggyBank,
    },
    {
      name: "Save up more money ",
      desc: "to buy that house, car or whatever your financial goals are.",
      icon: Users,
    },
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
    <div className="flex flex-col lg:flex-row gap-8 px-2 lg:px-10 py-12 w-full">
      <motion.div
        className="flex flex-col gap-5 lg:w-[50%] justify-center"
        initial="hidden"
        whileInView="visible"
        onViewportEnter="visible"
        viewport={{ amount: 0.1 }}
      >
        <h1 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Why Choose Our Expense Tracker?
        </h1>
        <div className="p-1">
          {/* <h1 className="mb-2 text-3xl">Tired of reckless spending habits?</h1> */}
          <div className=" flex flex-col gap-7 transition-all">
            {perks.map(({ icon: Icon, name, desc }) => (
              <motion.span
                variants={itemVariants}
                className="shadow p-3 rounded-full flex gap-3 justify-start items-center"
              >
                <span>
                  <Icon
                    size={50}
                    className="rounded-full  bg-purple-700 text-white p-1  stroke-[1px]"
                  />
                </span>
                <span className="p-1 ">
                  <h1 className="font-semibold">{name}</h1>
                  <p className="text-gray-600">{desc}</p>
                </span>
              </motion.span>
            ))}
          </div>
        </div>
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
