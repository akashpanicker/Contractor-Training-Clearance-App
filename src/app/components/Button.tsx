import { Loader2 } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "destructive";
  fullWidth?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  type = "button",
  disabled = false,
  loading = false,
}: ButtonProps) {
  const baseClasses =
    "h-12 px-6 rounded-xl font-semibold transition-all duration-200 min-h-[48px] flex items-center justify-center gap-2";

  const isDisabled = disabled || loading;

  const variantClasses =
    variant === "primary"
      ? isDisabled
        ? "bg-[#93C5FD] text-white cursor-not-allowed"
        : "bg-[#00539B] text-white hover:bg-[#0052A3] active:bg-[#003D7A]"
      : variant === "secondary"
      ? isDisabled
        ? "border-2 border-[#D1D5DB] text-[#9CA3AF] bg-white cursor-not-allowed"
        : "border-2 border-[#00539B] text-[#00539B] bg-white hover:bg-[#F0F7FF] active:bg-[#E0EFFF]"
      : variant === "destructive"
      ? isDisabled
        ? "bg-[#FECACA] text-[#B91C1C] cursor-not-allowed"
        : "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C]"
      : "";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses} ${widthClass}`}
    >
      {loading && <Loader2 size={20} className="animate-spin" />}
      {children}
    </button>
  );
}