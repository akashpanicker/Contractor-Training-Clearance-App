import { Home, Calendar, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/my-bookings" },
    { icon: Calendar, label: "Book", path: "/book-appointment" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F3F4F6] safe-area-pb">
      <nav className="flex items-center justify-around h-16 max-w-[390px] mx-auto px-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] -my-2"
            >
              <Icon
                size={24}
                className={
                  isActive ? "text-[#00539B]" : "text-[#9CA3AF]"
                }
                strokeWidth={isActive ? 2.5 : 2}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}