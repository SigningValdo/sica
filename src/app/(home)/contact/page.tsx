"use client";
import Formulaire from "@/components/Formulaire";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

// Charger le composant Map uniquement côté client
// const Map = dynamic(() => import("@/components/Map"), {
//   ssr: false,
// });

const page = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row">
        <div className="mt-[92px] w-full flex flex-col justify-between lg:items-center">
          <div className="max-w-[675px]">
            <div className=" m-auto space-y-6 paragraph-1">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1"
              >
                Vous avez un immeuble à gérer ? Un besoin d’entretien ?
              </motion.h1>
              <div>
                <motion.h2
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  className="title-2 text-primary"
                >
                  Parlons-en
                </motion.h2>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                >
                  {" "}
                  Chez SICA, nous croyons à l’importance du contact humain.{" "}
                  <br /> <br /> Que vous soyez propriétaire, gestionnaire, ou
                  futur locataire, notre équipe est disponible et réactive pour
                  répondre à vos besoins.
                </motion.p>
              </div>
            </div>
          </div>
          <Image
            src="/parlons-en.svg"
            alt="Parlons En"
            width={517}
            height={504}
            className="w-[517px] max-h-[148px]"
          />
        </div>
        <Formulaire />
      </section>
      {/* <section className="container max-w-7xl m-auto mt-[76px] lg:mx-[44px]">
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          transition={{
            // type: "spring",
            offset: 300,
          }}
          className="title-2 leading-[42px]"
        >
          Courriels : <br /> info@sica-quebec.ca
        </motion.p>
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          transition={{
            // type: "spring",
            offset: 300,
          }}
          className="title-2 leading-[42px] mt-6"
        >
          Téléphones : <br /> 581-424-4444
        </motion.p>
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          transition={{
            // type: "spring",
            offset: 300,
          }}
          className="title-2 leading-[42px] mt-[76px]"
        >
          Notre adresse : 420-A rang Saint-Gabriel, Vallée-Jonction, QC G0S 3J0
        </motion.p>
      </section> */}
      <section className="flex mt-[60px] mb-[119px] lg:mx-[44px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5503.893217975294!2d-70.905943!3d46.390284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb9ab5eb1b5f355%3A0xb58bef71742f031a!2sCamil%20Jacob%20Inc!5e0!3m2!1sfr!2scm!4v1750181504414!5m2!1sfr!2scm"
          width="100%"
          height="400"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default page;
