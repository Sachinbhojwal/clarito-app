import {
  FiMenu,
  FiX,
} from "react-icons/fi";

const CustomerMobileButton = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      onClick={() =>
        setIsOpen(!isOpen)
      }
      className="
      lg:hidden
      rounded-xl
      p-2
      hover:bg-gray-100
      transition
      "
    >
      {isOpen ? (
        <FiX size={26} />
      ) : (
        <FiMenu size={26} />
      )}
    </button>
  );
};

export default CustomerMobileButton;