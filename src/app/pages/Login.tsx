import { useState } from "react";
import { useNavigate } from "react-router";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginByEmail } = useUser();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const validateEmail = (value: string): string | undefined => {
    if (!value) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Enter a valid email address";
    return undefined;
  };

  const validationError = validateEmail(email);
  const loginError = emailNotFound ? "Email not found. Please create an account." : undefined;
  const emailError = validationError || loginError;
  const isFormValid = !validationError && Boolean(email);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!touched && value) setTouched(true);
    if (emailNotFound) setEmailNotFound(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!isFormValid) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const loginSuccess = loginByEmail(email);
    setLoading(false);

    if (loginSuccess) {
      navigate("/my-bookings");
      return;
    }

    setEmailNotFound(true);
  };

  return (
    <div className="page page--dark-gradient">
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16 pt-11">
        <div className="create-account__header">
          <h1 className="create-account__title">Login</h1>
          <p className="create-account__subtitle">Enter your email to continue</p>
        </div>

        <div className="create-account__card">
          <form onSubmit={handleSubmit} className="create-account__form">
            <InputField
              label="Email Address"
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter Email Address"
              error={emailError}
              isValid={!emailError}
              showValidation={touched}
            />

            {emailNotFound && (
              <p className="create-account__subtitle">
                <button
                  type="button"
                  onClick={() => navigate("/create-account")}
                  className="create-account__link"
                >
                  Create Account
                </button>
              </p>
            )}

            <Button type="submit" fullWidth disabled={!isFormValid} loading={loading}>
              Login
            </Button>
          </form>
        </div>
      </div>

      <div className="home-indicator">
        <div className="home-indicator__bar"></div>
      </div>
    </div>
  );
}
