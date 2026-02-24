import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Mail, Phone, Building, LogOut, User as UserIcon } from "lucide-react";
import { useUser } from "../contexts/UserContext";
import { Button } from "../components/Button";
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
    <div className="min-h-screen bg-white flex flex-col pb-16">
      {/* Header */}
      <div className="px-6 py-4 pt-11">
        <h1 className="text-xl font-semibold text-[#00539B]">Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#00539B] to-[#0052A3] rounded-full flex items-center justify-center mb-4 shadow-lg">
            <UserIcon size={48} className="text-white" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-[#1F2937]">
            {user.firstName} {user.lastName}
          </h2>
        </div>

        {/* Profile Details */}
        <div className="space-y-4 mb-8">
          {/* Email */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 border border-[#E5E7EB]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail size={20} className="text-[#00539B]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">
                  Email
                </p>
                <p className="text-sm font-medium text-[#1F2937] break-words">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 border border-[#E5E7EB]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone size={20} className="text-[#00539B]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">
                  Phone Number
                </p>
                <p className="text-sm font-medium text-[#1F2937]">
                  {user.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Vendor */}
          <div className="bg-[#F9FAFB] rounded-2xl p-4 border border-[#E5E7EB]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Building size={20} className="text-[#00539B]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">
                  Vendor
                </p>
                <p className="text-sm font-medium text-[#1F2937]">
                  {user.vendor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full h-12 px-6 rounded-xl font-semibold transition-all duration-200 min-h-[48px] bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}