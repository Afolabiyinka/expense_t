import { createContext, type ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  handleUser: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteUser: () => void;
}

const UserContext = createContext<UserContextProps | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<string>(() => {
    const storedUser = localStorage.getItem("storedUser");
    return storedUser ? JSON.parse(storedUser) : "";
  });

  const navigate = useNavigate();

  const handleUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("storedUser", JSON.stringify(user));
    navigate("/app/finances");
    console.log(user);
  };

  const deleteUser = () => {
    localStorage.removeItem("storedUser");
    localStorage.removeItem("transactions");
    localStorage.removeItem("profilePic");
    setUser("");
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
