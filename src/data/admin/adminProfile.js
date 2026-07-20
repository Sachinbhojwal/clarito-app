export const adminProfile = {
  id: "ADMIN-001",

  name: "Sachin Gupta",

  role: "Super Admin",

  email: "admin@clarito.com",

  phone: "+91 9876543210",

  image: `${import.meta.env.BASE_URL}images/admin.png`,

  status: "Active",

  permissions: [
    "manage-bookings",
    "manage-employees",
    "manage-customers",
    "manage-services",
    "manage-payments",
    "manage-reviews",
    "manage-settings",
  ],
};