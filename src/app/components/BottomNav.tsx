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
    <div className="bottom-nav safe-area-pb">
      <nav className="bottom-nav__inner">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="bottom-nav__item"
            >
              <Icon
                size={24}
                className={
                  isActive
                    ? "bottom-nav__icon--active"
                    : "bottom-nav__icon--inactive"
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