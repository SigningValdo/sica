"use client";

import MobileHeader from "@/components/MobileHeader";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Bloque le scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Restaure le scroll
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow">
      <div className="p-4 lg:p-0 lg:pl-4 xl:pl-[60px] flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="SICA Logo"
              width={96}
              height={40}
              objectFit="contain"
              className=" w-40 h-auto lg:w-auto"
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className=" flex gap-[21px]">
            {Navlinks.map(({ href, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    pathName === href ? "text-primary" : "text-black"
                  } hover:text-primary text-lg`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block min-w-[315px] text-grey">
          <div className="border-l paragraph-2 border-gray-300 p-2 border-b">
            <p className="opacity-0">text</p>
          </div>
          {Object.entries(ContactInfos).map(([key, value]) => (
            <div
              key={key}
              className="border-l paragraph-2 border-gray-300 p-2 border-b"
            >
              <p>{value}</p>
            </div>
          ))}
        </div>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="fixed bg-black/20 top-0 bottom-0 left-0 right-0 flex justify-end z-30"
        >
          <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;

const ContactInfos = {
  phone: "581-424-4444",
  email: "info@sica-quebec.ca",
  address: "Facebook",
};
const Navlinks = [
  {
    href: "/gestion-immobiliere",
    title: "Gestion immobilière",
  },
  {
    href: "/entretien-menager",
    title: "Entretien ménager",
  },
  {
    href: "/about",
    title: "À propos",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];
