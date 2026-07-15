import {
  FaHome,
  FaCalendarCheck,
  FaUserTie,
  FaUsers,
  FaTools,
  FaMoneyBillWave,
  FaStar,
  FaCog,
} from "react-icons/fa";

export const sidebarData = [
  {
    title: "Dashboard",
    slug: "dashboard",
    path: "/admin",
    icon: FaHome,
  },

  {
    title: "Bookings",
    slug: "bookings",
    path: "/admin/bookings",
    icon: FaCalendarCheck,
  },

  {
    title: "Employees",
    slug: "employees",
    path: "/admin/employees",
    icon: FaUserTie,
  },

  {
    title: "Customers",
    slug: "customers",
    path: "/admin/customers",
    icon: FaUsers,
  },

  {
    title: "Services",
    slug: "services",
    path: "/admin/services",
    icon: FaTools,
  },

  {
    title: "Payments",
    slug: "payments",
    path: "/admin/payments",
    icon: FaMoneyBillWave,
  },

  {
    title: "Reviews",
    slug: "reviews",
    path: "/admin/reviews",
    icon: FaStar,
  },

  {
    title: "Settings",
    slug: "settings",
    path: "/admin/settings",
    icon: FaCog,
  },
];