import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 min-h-screen bg-gray-100 p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;