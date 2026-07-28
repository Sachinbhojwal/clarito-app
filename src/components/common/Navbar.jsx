import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Logo from "./navbar/Logo";
import DesktopNav from "./navbar/DesktopNav";
import MobileMenu from "./navbar/MobileMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <DesktopNav
            user={user}
            handleLogout={handleLogout}
          />

          <MobileMenuButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Navbar;