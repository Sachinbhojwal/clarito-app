import { useState } from "react";

import Logo from "../common/navbar/Logo";

import ProviderDesktopNav from "./ProviderDesktopNav";
import ProviderMobileMenu from "./ProviderMobileMenu";
import ProviderMobileButton from "./ProviderMobileButton";

const ProviderNavbar = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-5">
        <div
          className="
          h-20
          flex
          items-center
          justify-between
          "
        >
          {/* Logo */}

          <Logo />

          {/* Desktop */}

          <ProviderDesktopNav />

          {/* Mobile */}

          <ProviderMobileButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}

      <ProviderMobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default ProviderNavbar;