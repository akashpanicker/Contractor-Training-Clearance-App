import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import MyBookings from "./pages/MyBookings";
import BookAppointment from "./pages/BookAppointment";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CreateAccount,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/create-account",
    Component: CreateAccount,
  },
  {
    path: "/my-bookings",
    Component: MyBookings,
  },
  {
    path: "/book-appointment",
    Component: BookAppointment,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
