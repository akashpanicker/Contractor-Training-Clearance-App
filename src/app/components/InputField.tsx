import { Check, AlertCircle } from "lucide-react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  showValidation?: boolean;
}

export function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  isValid,
  showValidation,
}: InputFieldProps) {
  const hasError = showValidation && error;
  const hasSuccess = showValidation && isValid && value && !error;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-semibold text-[#6B7280]">{label}</label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`h-12 px-4 pr-12 rounded-lg border text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 transition-all w-full ${
            hasError
              ? "border-[#EF4444] focus:ring-[#EF4444] focus:border-[#EF4444]"
              : hasSuccess
              ? "border-[#10B981] focus:ring-[#10B981] focus:border-[#10B981]"
              : "border-[#D1D5DB] focus:ring-[#00539B] focus:border-transparent"
          }`}
        />
        {hasSuccess && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Check size={20} className="text-[#10B981]" />
          </div>
        )}
        {hasError && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <AlertCircle size={20} className="text-[#EF4444]" />
          </div>
        )}
      </div>
      {hasError && (
        <p className="text-xs text-[#EF4444] mt-1">{error}</p>
      )}
    </div>
  );
}