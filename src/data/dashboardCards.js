import {
  Users,
  UserCog,
  CalendarCheck,
  IndianRupee,
} from "lucide-react";

export const dashboardCards = [
  {
    id: 1,
    title: "Total Customers",
    value: "1,245",
    icon: Users,
    color: "bg-blue-500",
    change: "+12%",
  },
  {
    id: 2,
    title: "Total Employees",
    value: "186",
    icon: UserCog,
    color: "bg-green-500",
    change: "+8%",
  },
  {
    id: 3,
    title: "Total Bookings",
    value: "3,482",
    icon: CalendarCheck,
    color: "bg-amber-500",
    change: "+24%",
  },
  {
    id: 4,
    title: "Revenue",
    value: "₹8,45,000",
    icon: IndianRupee,
    color: "bg-red-500",
    change: "+15%",
  },
];