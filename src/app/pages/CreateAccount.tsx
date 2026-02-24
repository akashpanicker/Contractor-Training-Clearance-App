import { useState } from "react";
import { useNavigate } from "react-router";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useUser } from "../contexts/UserContext";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vendor: string;
}

interface FormTouched {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  vendor: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  vendor?: string;
}

export default function CreateAccount() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vendor: "",
  });
  const [touched, setTouched] = useState<FormTouched>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    vendor: false,
  });
  const [loading, setLoading] = useState(false);

  // Validation functions
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

  // Get current errors
  const errors: FormErrors = {
    firstName: validateName(formData.firstName),
    lastName: validateName(formData.lastName),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    vendor: validateVendor(formData.vendor),
  };

  // Check if form is valid
  const isFormValid = !errors.firstName && !errors.lastName && !errors.email && !errors.phone && !errors.vendor &&
    formData.firstName && formData.lastName && formData.email && formData.phone && formData.vendor;

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Mark field as touched when user types
    if (!touched[field] && value) {
      setTouched({ ...touched, [field]: true });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      vendor: true,
    });

    // If form is invalid, don't submit
    if (!isFormValid) {
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save user data to context
    setUser(formData);
    setLoading(false);
    // Navigate to My Bookings after account creation
    navigate("/my-bookings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2634] to-[#2D4356] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 pt-11">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">
            Create Account
          </h1>
          <p className="text-sm text-[#E5E7EB]">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/my-bookings")}
              className="text-[#60A5FA] font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-[390px] bg-white rounded-2xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(value) => handleFieldChange("firstName", value)}
              placeholder="Enter First Name"
              error={errors.firstName}
              isValid={!errors.firstName}
              showValidation={touched.firstName}
            />

            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => handleFieldChange("lastName", value)}
              placeholder="Enter Last Name"
              error={errors.lastName}
              isValid={!errors.lastName}
              showValidation={touched.lastName}
            />

            <InputField
              label="Email ID"
              value={formData.email}
              onChange={(value) => handleFieldChange("email", value)}
              type="email"
              placeholder="Enter Email ID"
              error={errors.email}
              isValid={!errors.email}
              showValidation={touched.email}
            />

            <InputField
              label="Phone Number"
              value={formData.phone}
              onChange={(value) => handleFieldChange("phone", value)}
              type="tel"
              placeholder="Enter Phone Number"
              error={errors.phone}
              isValid={!errors.phone}
              showValidation={touched.phone}
            />

            <InputField
              label="Vendor"
              value={formData.vendor}
              onChange={(value) => handleFieldChange("vendor", value)}
              placeholder="Enter Vendor"
              error={errors.vendor}
              isValid={!errors.vendor}
              showValidation={touched.vendor}
            />

            <Button type="submit" fullWidth disabled={!isFormValid} loading={loading}>
              Create Account
            </Button>
          </form>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-36 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}