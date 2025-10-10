import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("storedUser");
    return storedUser ? JSON.parse(storedUser) : "";
  });
  const navigate = useNavigate();

  function handleUser(e) {
    e.preventDefault();
    localStorage.setItem("storedUser", JSON.stringify(user));
    navigate("/app/finances");
    console.log(user);
  }

  function deleteUser() {
    localStorage.removeItem("storedUser")
    localStorage.removeItem("transactions")
    localStorage.removeItem("profilePic")
  }
  const value = { user, setUser, handleUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
