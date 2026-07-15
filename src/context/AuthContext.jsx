import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

const AuthProvider = ({
  children,
}) => {
  // ==========================
  // States
  // ==========================

  const [user, setUser] =
    useState(null);

  const [token, setToken] =
    useState(null);

  const [role, setRole] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  // ==========================
  // Load Data From LocalStorage
  // ==========================

  useEffect(() => {
    const savedToken =
      localStorage.getItem("token");

    const savedRole =
      localStorage.getItem("role");

    const savedUser =
      localStorage.getItem("user");

    if (
      savedToken &&
      savedRole &&
      savedUser
    ) {
      setToken(savedToken);

      setRole(savedRole);

      setUser(
        JSON.parse(savedUser)
      );
    }

    setLoading(false);
  }, []);

  // ==========================
  // Login Function
  // ==========================

  const login = ({
    token,
    role,
    user,
  }) => {
    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "role",
      role
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);

    setRole(role);

    setUser(user);
  };

  // ==========================
  // Logout Function
  // ==========================

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "role"
    );

    localStorage.removeItem(
      "user"
    );

    setToken(null);

    setRole("");

    setUser(null);
  };

  // ==========================
  // Context Values
  // ==========================

  const value = {
    user,
    token,
    role,
    loading,
    login,
    logout,
  };

  // ==========================
  // Provider
  // ==========================

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;