import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;