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

  const validateName = (name: string): string | undefined => {
    if (!name) return "This field is required";
    if (name.length < 2) return "Must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Only alphabetic characters allowed";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "Phone number is required";
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) return "Enter a valid phone number";
    return undefined;
  };

  const validateVendor = (vendor: string): string | undefined => {
    if (!vendor) return "Vendor is required";
    if (vendor.length < 2) return "Must be at least 2 characters";
    return undefined;
  };

  const validateIsnNumber = (isnNumber: string): string | undefined => {
    if (!isnNumber) return "ISN Number is required";
    const isnRegex = /^ISN-\d{7}$/;
    if (!isnRegex.test(isnNumber)) return "ISN Number must be in format ISN-XXXXXXX";
    return undefined;
  };

  const errors = isEditing
    ? {
        firstName: validateName(formData?.firstName || ""),
        lastName: validateName(formData?.lastName || ""),
        email: validateEmail(formData?.email || ""),
        phone: validatePhone(formData?.phone || ""),
        vendor: validateVendor(formData?.vendor || ""),
        isnNumber: validateIsnNumber(formData?.isnNumber || ""),
      }
    : undefined;

  const isProfileFormValid =
    Boolean(formData) &&
    !errors?.firstName &&
    !errors?.lastName &&
    !errors?.email &&
    !errors?.phone &&
    !errors?.vendor &&
    !errors?.isnNumber &&
    Boolean(formData?.firstName) &&
    Boolean(formData?.lastName) &&
    Boolean(formData?.email) &&
    Boolean(formData?.phone) &&
    Boolean(formData?.vendor) &&
    Boolean(formData?.isnNumber);

  // Show loading state while redirecting
  if (!user) {
    return null;
  }

  return (
    <div className="page page--white page--with-bottom-nav">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-header__title">Profile</h1>
        <button onClick={handleLogout} className="btn-logout btn-logout--header">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4">
        {/* Profile Avatar */}
        <div className="profile-avatar">
          <div className="profile-avatar__circle">
            <UserIcon size={48} strokeWidth={1.5} />
          </div>
          <div className="profile-avatar__name-row">
            <h2 className="profile-avatar__name">
              {user.firstName} {user.lastName}
            </h2>
            <button onClick={() => setIsEditing(!isEditing)} className="profile-avatar__edit-btn">
              <Edit size={20} />
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-details mb-8">
          {/* First Name */}
          <div className="profile-detail">
            <div className="profile-detail__row">
              <div className="profile-detail__icon">
                <UserIcon size={20} />
              </div>
              <div className="profile-detail__content">
                <p className="profile-detail__label">First Name</p>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={formData?.firstName || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, firstName: e.target.value } : null)}
                      className="profile-detail__input"
                    />
                    {errors?.firstName && <p className="input-field__error-text">{errors.firstName}</p>}
                  </>
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
                  <>
                    <input
                      type="text"
                      value={formData?.lastName || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, lastName: e.target.value } : null)}
                      className="profile-detail__input"
                    />
                    {errors?.lastName && <p className="input-field__error-text">{errors.lastName}</p>}
                  </>
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
                <p className="profile-detail__label">ISN Number</p>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={formData?.isnNumber || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, isnNumber: e.target.value } : null)}
                      className="profile-detail__input"
                      placeholder="ISN-XXXXXXX"
                    />
                    {errors?.isnNumber && <p className="input-field__error-text">{errors.isnNumber}</p>}
                  </>
                ) : (
                  <p className="profile-detail__value">{user.isnNumber}</p>
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
                  <>
                    <input
                      type="email"
                      value={formData?.email || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, email: e.target.value } : null)}
                      className="profile-detail__input"
                    />
                    {errors?.email && <p className="input-field__error-text">{errors.email}</p>}
                  </>
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
                  <>
                    <input
                      type="tel"
                      value={formData?.phone || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, phone: e.target.value } : null)}
                      className="profile-detail__input"
                    />
                    {errors?.phone && <p className="input-field__error-text">{errors.phone}</p>}
                  </>
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
                  <>
                    <input
                      type="text"
                      value={formData?.vendor || ''}
                      onChange={(e) => setFormData(prev => prev ? { ...prev, vendor: e.target.value } : null)}
                      className="profile-detail__input"
                    />
                    {errors?.vendor && <p className="input-field__error-text">{errors.vendor}</p>}
                  </>
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
                if (!isProfileFormValid) return;
                if (formData) setUser(formData);
                setIsEditing(false);
              }}
              className="btn btn--primary profile-actions__btn"
              disabled={!isProfileFormValid}
            >
              <Check size={20} />
              Save
            </button>
            <button
              onClick={() => {
                setFormData(user);
                setIsEditing(false);
              }}
              className="btn btn--secondary profile-actions__btn"
            >
              <X size={20} />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
