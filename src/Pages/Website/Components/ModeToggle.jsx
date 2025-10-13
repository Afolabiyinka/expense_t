import { IconButton } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-1 items-center">
      <IconButton
        id="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Sun color="black" /> : <Moon color="white" />}
      </IconButton>
      {/* <label className="md:hidden " htmlFor="icon">
          Theme
        </label> */}
    </div>
  );
};

export default ModeToggle;
