import { Link } from "react-router-dom";

import CustomerMenu from "./CustomerMenu";
import ProviderMenu from "./ProviderMenu";

const UserMenu = ({
  user,
  handleLogout,
}) => {
  if (!user) {
    return (
      <>
        <Link
          to="/login"
          className="
          font-semibold
          hover:text-amber-500
          "
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
          bg-amber-500
          hover:bg-amber-600
          text-white
          px-5
          py-2
          rounded-full
          "
        >
          Register
        </Link>
      </>
    );
  }

  return (
    <>
      {user?.role === "customer" && (
        <CustomerMenu
          user={user}
          handleLogout={handleLogout}
        />
      )}

      {user?.role === "provider" && (
        <ProviderMenu
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default UserMenu;