import { Outlet } from "react-router-dom";

import ProviderNavbar from "../components/provider/ProviderNavbar";

const ProviderLayout = () => {
  return (
    <>
      <ProviderNavbar />

      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default ProviderLayout;