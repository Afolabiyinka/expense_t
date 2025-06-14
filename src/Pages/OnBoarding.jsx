import { useState } from "react";
import welcomeSvg from "../assets/undraw_welcome-aboard_y4e9.svg";
import { Button, Input } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", username);

    setTimeout(() => {
      navigate("/app/finances");
    }, 3000);
  }
  return (
    <motion.div className="h-[100vh] w-full flex flex-col lg:flex-row gap-6 lg:gap-0 px-3 lg:px-10 py-12 ">
      <motion.div
        className="w-full h-full lg:w-1/2 flex flex-col  gap-4 lg:gap-6 justify-center items-center text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl">Welcome Aboard!👋</h1>
        <motion.p
          className="md:text-xl"
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          No sign-up needed -your data is stored safely on your device🔐
        </motion.p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-xl">
            What should we call you? 👤
          </label>
          <Input
            id="name"
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Eg Afolabi"
            sx={{ color: "gray" }}
            className="w-[20rem] h-[3rem] shadow-lg p-2.5 font-serif"
          />
          <Button variant="contained" type="submit">
            Continue
          </Button>
        </form>
      </motion.div>
      <motion.div
        className="w-full h-[80vh]  p-3 lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src={welcomeSvg}
          alt="Welcome aboard animation"
          className="object-cover w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default OnBoarding;
