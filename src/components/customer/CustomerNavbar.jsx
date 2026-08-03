import { useState } from "react";

import Logo from "../common/navbar/Logo";

import CustomerDesktopNav from "./CustomerDesktopNav";
import CustomerMobileMenu from "./CustomerMobileMenu";
import CustomerMobileButton from "./CustomerMobileButton";

const CustomerNavbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      bg-white
      shadow-sm
      "
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className="
          flex
          h-20
          items-center
          justify-between
          "
        >
          {/* Logo */}

          <Logo />

          {/* Desktop */}

          <CustomerDesktopNav />

          {/* Mobile Button */}

          <CustomerMobileButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}

      <CustomerMobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default CustomerNavbar;