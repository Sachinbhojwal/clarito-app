import { Outlet } from "react-router-dom";

import CustomerNavbar from "../components/customer/CustomerNavbar";

const CustomerLayout = () => {
  return (
    <>
      <CustomerNavbar />

      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default CustomerLayout;