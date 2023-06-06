import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext(null);

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    const token = await fakeAuth();
    setToken(token);
    setUser({ ...userData });
    navigate("/home");
  };

  const value = {
    token,
    user,
    onLogin: handleLogin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useAuth = () => {
  return useContext(UserContext);
};

export { AuthProvider, useAuth };
