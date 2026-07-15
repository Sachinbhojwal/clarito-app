// ====================================
// Base URL
// ====================================

const BASE_URL =
  "http://localhost:5000/api";

// ====================================
// Admin Login
// ====================================

export const adminLogin = async (
  loginData
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/admin/login`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          loginData
        ),
      }
    );

    const data =
      await response.json();

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

// ====================================
// Customer Login
// ====================================

export const customerLogin =
  async (loginData) => {
    try {
      const response =
        await fetch(
          `${BASE_URL}/customer/login`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              loginData
            ),
          }
        );

      const data =
        await response.json();

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

// ====================================
// Provider Login
// ====================================

export const providerLogin =
  async (loginData) => {
    try {
      const response =
        await fetch(
          `${BASE_URL}/provider/login`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              loginData
            ),
          }
        );

      const data =
        await response.json();

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

// ====================================
// Register User
// ====================================

export const registerUser =
  async (registerData) => {
    try {
      const response =
        await fetch(
          `${BASE_URL}/register`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              registerData
            ),
          }
        );

      const data =
        await response.json();

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  };

// ====================================
// Logout
// ====================================

export const logoutUser = () => {
  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "role"
  );

  localStorage.removeItem(
    "user"
  );
};

// ====================================
// Future Refresh Token
// ====================================

export const refreshToken =
  async () => {
    /*
      Future API

      /refresh-token
    */
  };