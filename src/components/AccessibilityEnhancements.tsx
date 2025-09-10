import React from "react";

/**
 * Composant d'améliorations d'accessibilité
 * Fournit des utilitaires pour améliorer l'accessibilité du site
 */

// Hook pour gérer le focus visible uniquement au clavier
export const useKeyboardNavigation = () => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("keyboard-navigation");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
};

// Composant Skip Link pour la navigation clavier
export const SkipLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <a
    href={href}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
    aria-label="Aller au contenu principal"
  >
    {children}
  </a>
);

// Composant pour les images avec alt text optimisé
interface AccessibleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  decorative?: boolean; // Pour les images purement décoratives
}

export const AccessibleImage: React.FC<AccessibleImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
  decorative = false,
  ...props
}) => {
  // Si l'image est décorative, on utilise alt="" et aria-hidden
  const altText = decorative ? "" : alt;
  const ariaHidden = decorative ? true : undefined;

  return (
    <img
      src={src}
      alt={altText}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : loading}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
};

// Composant pour les boutons avec états d'accessibilité
interface AccessibleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  children: React.ReactNode;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span className={loading ? "sr-only" : ""}>{children}</span>
      {loading && <span aria-live="polite">Chargement en cours...</span>}
    </button>
  );
};

// Composant pour les liens avec indication d'ouverture externe
interface AccessibleLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  children: React.ReactNode;
}

export const AccessibleLink: React.FC<AccessibleLinkProps> = ({
  external = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm";

  if (external) {
    return (
      <a
        className={`${baseClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby="external-link-description"
        {...props}
      >
        {children}
        <span className="sr-only">{" (s'ouvre dans un nouvel onglet)"}</span>
        <svg
          className="inline-block w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    );
  }

  return (
    <a className={`${baseClasses} ${className}`} {...props}>
      {children}
    </a>
  );
};

// Composant pour les formulaires avec validation accessible
interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  helpText?: string;
}

export const AccessibleFormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  required = false,
  children,
  helpText,
}) => {
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="requis">
            *
          </span>
        )}
      </label>

      {helpText && (
        <p id={helpId} className="text-sm text-gray-600">
          {helpText}
        </p>
      )}

      <div>
        {React.cloneElement(children as React.ReactElement<any>, {
          id,
          "aria-describedby":
            [helpText ? helpId : "", error ? errorId : ""]
              .filter(Boolean)
              .join(" ") || undefined,
          "aria-invalid": error ? "true" : undefined,
          "aria-required": required,
        })}
      </div>

      {error && (
        <p
          id={errorId}
          className="text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};
