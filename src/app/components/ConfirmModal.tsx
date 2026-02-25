import { X } from "lucide-react";
import { Button } from "./Button";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: "destructive" | "primary";
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmVariant = "primary",
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {/* Backdrop */}
      <div className="modal-overlay__backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="modal animate-in fade-in duration-200">
        {/* Close Button */}
        <button onClick={onClose} className="modal__close-btn">
          <X size={20} />
        </button>

        {/* Content */}
        <div className="mb-6">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__message">{message}</p>
        </div>

        {/* Actions */}
        <div className="modal__actions">
          <Button variant="secondary" fullWidth onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant === "destructive" ? "destructive" : "primary"}
            fullWidth
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
