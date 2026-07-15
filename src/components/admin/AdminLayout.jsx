import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Toolbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Sidebar />

      <div className="lg:ml-72">

        <Topbar />

        <main className="p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;