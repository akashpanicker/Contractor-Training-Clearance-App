import { RouterProvider } from "react-router";
import { router } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { BookingProvider } from "./contexts/BookingContext";
import { Toaster } from "sonner";

export default function App() {
  return (
    <UserProvider>
      <BookingProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </BookingProvider>
    </UserProvider>
  );
}