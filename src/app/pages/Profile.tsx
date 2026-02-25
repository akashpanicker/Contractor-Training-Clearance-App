import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Mail, Phone, Building, LogOut, User as UserIcon } from "lucide-react";
import { useUser } from "../contexts/UserContext";
import { BottomNav } from "../components/BottomNav";

export default function Profile() {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();

  // Redirect to create account if no user data
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };

  // Show loading state while redirecting
  if (!user) {
    return null;
  }

  return (
    <div className="page page--white page--with-bottom-nav">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-header__title">Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4">
        {/* Profile Avatar */}
        <div className="profile-avatar">
          <div className="profile-avatar__circle">
            <UserIcon size={48} strokeWidth={1.5} />
          </div>
          <h2 className="profile-avatar__name">
            {user.firstName} {user.lastName}
          </h2>
        </div>

        {/* Profile Details */}
        <div className="space-y-4 mb-8">
          {/* Email */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <Mail size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">Email</p>
                <p className="profile-detail__value">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <Phone size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">Phone Number</p>
                <p className="profile-detail__value">{user.phone}</p>
              </div>
            </div>
          </div>

          {/* Vendor */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <Building size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">Vendor</p>
                <p className="profile-detail__value">{user.vendor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="btn-logout">
          <LogOut size={20} />
          Logout
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}