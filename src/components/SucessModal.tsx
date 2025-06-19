import React, { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "loading" | "success" | "error";
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  status,
  message,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status, onClose]);

  if (!isOpen) return null;

  let icon, color, defaultMsg;
  switch (status) {
    case "loading":
      icon = (
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      );
      color = "text-blue-600";
      defaultMsg = "Envoi en cours...";
      break;
    case "success":
      icon = (
        <svg
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
      color = "text-green-600";
      defaultMsg = "Succès !";
      break;
    case "error":
      icon = (
        <svg
          className="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
      color = "text-red-600";
      defaultMsg = "Une erreur est survenue.";
      break;
    default:
      icon = null;
      color = "";
      defaultMsg = "";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-[300px] rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center justify-center relative">
        <div className="mb-4">{icon}</div>
        <div className={`mb-4 text-lg font-semibold text-center ${color}`}>
          {message || defaultMsg}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
