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

  const inputStateClass = hasError
    ? "input-field__input--error"
    : hasSuccess
      ? "input-field__input--success"
      : "input-field__input--default";

  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <div className="input-field__wrapper">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`input-field__input ${inputStateClass}`}
        />
        {hasSuccess && (
          <div className="input-field__icon input-field__icon--success">
            <Check size={20} />
          </div>
        )}
        {hasError && (
          <div className="input-field__icon input-field__icon--error">
            <AlertCircle size={20} />
          </div>
        )}
      </div>
      {hasError && (
        <p className="input-field__error-text">{error}</p>
      )}
    </div>
  );
}