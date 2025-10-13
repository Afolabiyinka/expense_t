import welcomeSvg from "../../assets/undraw_welcome-aboard_y4e9.svg";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "../App/user/hooks/UserContext";
import { useNavigate } from "react-router-dom";
import ProfilePicUpload from "../App/user/components/ProfilePic";

const OnBoarding = () => {
  const navigate = useNavigate();
  const { user, setUser, handleUser } = useUser();
  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser) {
      navigate("/app/finances");
    }
  }, []);
  return (
    <motion.div className="h-full  w-full flex flex-col  justify-center items-center lg:flex-row gap-6 lg:gap-0 px-3 lg:px-10  ">
      <motion.div
        className="w-full h-full lg:w-1/2 flex flex-col mt-6 gap-4 lg:gap-6 justify-center items-center text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl">Welcome Aboard!👋</h1>
        <motion.p
          className="md:text-xl"
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          No sign-up needed your data is stored safely on your device🔐
        </motion.p>

        <form className="flex flex-col gap-4" onSubmit={handleUser}>
          <label htmlFor="name" className="text-xl">
            What should we call you? 👤
          </label>
          <span className="flex gap-3 items-center">
            <ProfilePicUpload />
            <input
              id="name"
              type="text"
              value={user}
              required
              onChange={(e) => setUser(e.target.value)}
              placeholder="Eg Richard"
              className="w-[16rem] h-[3.5rem] border border-gray-200 focus:ring-2 focus:ring-purple-400 rounded-full p-3 font-serif bg-inherit outline-0 text-black"
            />
          </span>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 cursor-pointer py-3 rounded-full font-bold hover:bg-purple-600 hover:shadow transition duration-300 flex gap-3 items-center justify-center"
          >
            Continue
          </button>
        </form>
      </motion.div>
      <motion.div
        className="w-full h-full  lg:w-1/2 flex items-center justify-center"
        initial={{ y: -30 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={welcomeSvg}
          alt="Welcome aboard animation"
          className="object-cover md:max-h-[600px] w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default OnBoarding;
