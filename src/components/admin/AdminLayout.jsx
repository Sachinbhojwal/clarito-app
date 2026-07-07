import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="lg:ml-72">

        {/* Header */}
        <Header
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="p-6">

          <div className="max-w-7xl mx-auto">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;