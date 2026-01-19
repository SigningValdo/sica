"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 lg:px-0 relative">
      <div className=" hidden lg:grid absolute  grid-cols-3 top-0 left-0 w-full h-full pointer-events-none">
        <div className="border border-grey border-t-0"></div>
        <div className="border border-grey border-t-0 border-l-0"></div>
        <div className="border border-grey border-t-0 border-l-0"></div>
      </div>
      <div className="absolute top-[130px] bg-grey left-0 w-full h-[1px] hidden lg:block"></div>

      <div className="grid  grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-0 ">
        {/* Footer Section 1 */}
        <div className="lg:pl-[84px]  pt-[66px] pb-[18px]">
          <div className="max-w-[323px]">
            <h3 className="inputs text-grey">NOUS SOMMES</h3>
            {/* Logo */}
            <div className="space-y-4 mt-[44px]">
              <Image
                src="/Logo.png"
                alt="SICA Logo White"
                width={96}
                height={40}
                className="h-auto w-auto object-contain"
              />
              <p className="mb-2">
                Locataire, propriétaire ou promoteur : nous sommes toujours là
                pour vous
              </p>
              <div>
                <p className="mb-3">
                  SICA est un membre partenaire de la CORPIQ
                </p>
                <Image
                  src="/corpiq.svg"
                  alt="SICA Logo White"
                  width={96}
                  height={40}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section 2 */}
        <div className="lg:pl-[84px] md:pt-[66px] pb-[18px] ">
          <div className="max-w-[323px]">
            <h3 className="inputs text-grey">NOS SERVICES</h3>
            <ul className="space-y-3 mt-[44px]">
              {Navlinks.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href} className=" hover:text-primary">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Section 3 */}
        <div className="lg:pl-[84px] md:pt-[66px] pb-[18px]">
          <div className="max-w-[323px]">
            <h3 className="inputs text-grey">NOUS CONTACTER</h3>
            <div className="flex flex-col space-y-3 mt-[44px]">
              <Link target="_blank" href="mailto:info@sica-quebec.ca">
                Courriels: <br /> info@sica-quebec.ca
              </Link>
              <Link target="_blank" href="tel:+581-424-4444">
                Téléphones : <br /> 581-424-4444
              </Link>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/eSNqUHTp2YXmyBjU7"
              >
                Adresse : <br /> 420-A rang Saint-Gabriel, Vallée-Jonction, QC
                G0S 3J0
              </Link>
              {/* Social Media Links Placeholder */}
            </div>
            <div className="mt-[44px]">
              <Link target="_blank" href="https://www.facebook.com/gestionsica">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t text-grey border-grey py-6 text-lg">
        <p> ©2025 Designé et intégré par JFT Art</p>
      </div>
    </footer>
  );
};

export default Footer;

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
    title: "À propos de SICA",
  },
];
