"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MobileHeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileHeader = ({ isOpen, setIsOpen }: MobileHeaderProps) => {
  const pathName = usePathname();
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="px-4 text-black bg-white w-full md:max-w-[456px] h-screen space-y-10"
    >
      <div className="  flex justify-between items-center border-b  p-4">
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
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={handleOpen}
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
      <div className="flex flex-col justify-between">
        <nav className="">
          <ul className=" flex flex-col gap-[21px]">
            {Navlinks.map(({ href, title }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    pathName === href ? "text-primary" : "text-black"
                  } hover:text-primary text-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" min-w-[315px] text-grey">
          <div className=" paragraph-2 border-gray-300 p-2 border-b">
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
      </div>
    </div>
  );
};

export default MobileHeader;

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
