import { motion } from "framer-motion";
import { Button, IconButton, Menu, Tooltip } from "@mui/material";
import ProfilePicUpload from "../Pages/App/ProfilePic";
import { useUser } from "../Context/UserContext";
import { Check } from "lucide-react";

const EditUserDetails = ({ setEditingInfo }) => {
  const { user, setUser, handleUser } = useUser();

  return (
    <motion.form
      className="border border-gray-300 p-5 rounded-3xl  backdrop-blur-2xl fixed flex flex-col justify-start items-start gap-5 h-fit w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setEditingInfo(false);
      }}
      initial={{ y: -100, scale: 0.9 }}
      animate={{ y: -100, scale: 1 }}
      transition={{ duration: 0.1 }}
    >
      <span className="flex gap-2 items-center">
        <ProfilePicUpload />
        <p>Profile Pic</p>
      </span>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="p-3  border rounded-3xl w-full focus:outline-none"
      />
      <span className="flex justify-between  items-center border p-1 rounded-3xl w-full border-gray-300">
        <button className="bg-red-500 p-3 px-8 rounded-3xl cursor-pointer hover:bg-red-600 hover:shadow text-white">
          Log Out{" "}
        </button>
        <Button
          sx={{
            borderRadius: 10,
            // padding: "15px",
            paddingX: "20px",
            paddingY: "10px",
            background: "green",
            color: "white",
          }}
          type="submit"
          variant="contained"
        >
          <Check />
        </Button>
      </span>
    </motion.form>
  );
};
export default EditUserDetails;
