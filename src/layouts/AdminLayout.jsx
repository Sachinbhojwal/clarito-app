import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-gray-100 p-5 lg:ml-72">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;