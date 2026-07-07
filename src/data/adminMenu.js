import {
  LayoutDashboard,
  UserCog,
  Users,
  CalendarCheck,
  Briefcase,
  CreditCard,
  Star,
  Settings,
} from "lucide-react";

export const adminMenu = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Employees",
    path: "/admin/employees",
    icon: UserCog,
  },
  {
    id: 3,
    title: "Customers",
    path: "/admin/customers",
    icon: Users,
  },
  {
    id: 4,
    title: "Bookings",
    path: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    id: 5,
    title: "Services",
    path: "/admin/services",
    icon: Briefcase,
  },
  {
    id: 6,
    title: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
  {
    id: 7,
    title: "Reviews",
    path: "/admin/reviews",
    icon: Star,
  },
  {
    id: 8,
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];