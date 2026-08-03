import { Outlet } from "react-router-dom";

import PublicNavbar from "../components/public/PublicNavbar";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;