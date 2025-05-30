"use client";

import { MouseEventHandler } from "react";
import { ReactSVG } from "react-svg";

interface ButtonProps {
  children: string;
  variant?: "primary" | "secondary" | "textWithLine";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  const variantClasses = {
    // Bouton rouge plein -> survol plus foncé
    primary:
      "bg-primary text-white inputs uppercase px-[22px] py-[17px] w-max h-max border-[2px] border-primary hover:bg-white hover:text-primary transition duration-300",

    // Bouton transparent avec bordure -> survol rempli
    secondary:
      "hover:bg-primary hover:text-white inputs flex gap-[18px] uppercase px-[22px] py-[17px] w-max h-max border-b-[2px] border-primary bg-white text-primary items-center transition duration-300",

    // Texte avec ligne -> survol avec flèche
    textWithLine:
      "bg-primary text-white uppercase inputs px-[22px] py-[17px] w-max h-max border-none hover:border-[2px] hover:border-primary hover:bg-white hover:text-primary flex items-center gap-[18px] transition duration-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}{" "}
      {variant !== "primary" ? (
        <ReactSVG src="right_icon.svg" className="min-h-[12px] min-w-[14px]" />
      ) : (
        ""
      )}
    </button>
  );
}
