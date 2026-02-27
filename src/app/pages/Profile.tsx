import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Building, LogOut, User as UserIcon, Edit, Check, X, Hash } from "lucide-react";
import { useUser } from "../contexts/UserContext";
import { BottomNav } from "../components/BottomNav";

export default function Profile() {
  const navigate = useNavigate();
  const { user, setUser, clearUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  // Redirect to create account if no user data
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Update formData when user changes
  useEffect(() => {
    setFormData(user);
  }, [user]);

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
        <button onClick={() => setIsEditing(!isEditing)} className="page-header__edit-btn">
          <Edit size={20} />
        </button>
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
          {/* First Name */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <UserIcon size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">First Name</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData?.firstName || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, firstName: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.firstName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Last Name */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <UserIcon size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">Last Name</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData?.lastName || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, lastName: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* ISN */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <Hash size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">ISN</p>
                {isEditing ? (
                  <input
                    type="number"
                    value={formData?.isn || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, isn: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.isn}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <Mail size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData?.email || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, email: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.email}</p>
                )}
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
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData?.phone || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, phone: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.phone}</p>
                )}
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
                {isEditing ? (
                  <input
                    type="text"
                    value={formData?.vendor || ''}
                    onChange={(e) => setFormData(prev => prev ? { ...prev, vendor: e.target.value } : null)}
                    className="profile-detail__input"
                  />
                ) : (
                  <p className="profile-detail__value">{user.vendor}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Actions */}
        {isEditing && (
          <div className="profile-actions">
            <button
              onClick={() => {
                if (formData) setUser(formData);
                setIsEditing(false);
              }}
              className="btn btn--primary"
            >
              <Check size={20} />
              Save
            </button>
            <button
              onClick={() => {
                setFormData(user);
                setIsEditing(false);
              }}
              className="btn btn--secondary"
            >
              <X size={20} />
              Cancel
            </button>
          </div>
        )}

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