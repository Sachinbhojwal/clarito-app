import {
  FaMoneyBillWave,
  FaCalendarCheck,
  FaUsers,
  FaUserTie,
  FaTools,
  FaStar,
} from "react-icons/fa";

export const dashboardStats = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "₹2,45,000",
    icon: FaMoneyBillWave,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },

  {
    id: "bookings",
    title: "Total Bookings",
    value: "1,520",
    icon: FaCalendarCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },

  {
    id: "customers",
    title: "Total Customers",
    value: "3,245",
    icon: FaUsers,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },

  {
    id: "employees",
    title: "Total Employees",
    value: "248",
    icon: FaUserTie,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },

  {
    id: "services",
    title: "Total Services",
    value: "25",
    icon: FaTools,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },

  {
    id: "reviews",
    title: "Total Reviews",
    value: "4,856",
    icon: FaStar,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];