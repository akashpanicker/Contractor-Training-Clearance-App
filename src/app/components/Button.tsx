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
  const isDisabled = disabled || loading;

  const classes = [
    "btn",
    `btn--${variant}`,
    isDisabled ? "btn--disabled" : "",
    fullWidth ? "btn--full-width" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={classes}
    >
      {loading && <Loader2 size={20} className="animate-spin" />}
      {children}
    </button>
  );
}