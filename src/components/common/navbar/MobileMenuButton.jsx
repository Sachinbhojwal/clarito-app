import { FiMenu, FiX } from "react-icons/fi";

const MobileMenuButton = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      className="
      md:hidden
      text-3xl
      "
      onClick={() =>
        setIsOpen(!isOpen)
      }
    >
      {isOpen ? (
        <FiX />
      ) : (
        <FiMenu />
      )}
    </button>
  );
};

export default MobileMenuButton;