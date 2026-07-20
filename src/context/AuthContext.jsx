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


  const [user, setUser] =
    useState(null);


  const [token, setToken] =
    useState(null);


  const [role, setRole] =
    useState("");


  const [loading, setLoading] =
    useState(true);





  // ==========================
  // Load User From LocalStorage
  // ==========================


  useEffect(() => {


    try {


      const savedToken =
        localStorage.getItem(
          "token"
        );


      const savedRole =
        localStorage.getItem(
          "role"
        );


      const savedUser =
        localStorage.getItem(
          "user"
        );




      if (savedToken) {

        setToken(savedToken);

      }




      if (savedRole) {

        setRole(savedRole);

      }




      if (
        savedUser &&
        savedUser !== "undefined" &&
        savedUser !== "null"
      ) {


        setUser(
          JSON.parse(savedUser)
        );


      }



    }

    catch (error) {


      console.error(
        "Auth Load Error:",
        error
      );


      localStorage.removeItem(
        "user"
      );


    }


    finally {


      setLoading(false);


    }



  }, []);








  // ==========================
  // Login Function
  // ==========================


  const login = (userData) => {



    if (!userData) {

      return;

    }




    const demoToken =
      "demo-token";





    localStorage.setItem(
      "token",
      demoToken
    );





    localStorage.setItem(
      "role",
      userData.role
    );





    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );






    setToken(
      demoToken
    );



    setRole(
      userData.role
    );



    setUser(
      userData
    );



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








  const value = {


    user,


    token,


    role,


    loading,


    login,


    logout,


  };








  return (

    <AuthContext.Provider
      value={value}
    >

      {children}

    </AuthContext.Provider>

  );

};



export default AuthProvider;