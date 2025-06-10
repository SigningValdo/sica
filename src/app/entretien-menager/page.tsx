"use client";
import Button from "@/components/Button";
import Formulaire from "@/components/Formulaire";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="px-4 xl:px-0">
      <section className=" flex flex-col gap-10 2xl:gap-0 lg:flex-row">
        <div className=" w-full relative">
          <div className="hidden lg:block absolute m-auto w-full bg-white h-[32px] top-1/2 z-10"></div>
          <div className="hidden lg:block absolute m-auto h-full bg-white w-[32px] left-1/2 z-10"></div>
          <Image
            src="/entretien-menager-page.png"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={625}
            height={787}
            objectFit="contain"
            className="w-full h-full xl:h-[716px]"
          />
        </div>
        <div className="w-full lg:m-auto ">
          <div className=" max-w-[625px] lg:m-auto space-y-[64px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className=" title-1"
            >
              Entretien ménager
            </motion.h1>
            <div className=" space-y-6">
              <motion.h2
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-2 leading-[42px]"
              >
                Un service de propreté adapté à chaque environnement
              </motion.h2>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="paragraph-1"
              >
                Chez SICA, la propreté ne se résume pas au nettoyage :elle
                contribue à la santé, au confort et à l’image de vos espaces.
                Nous offrons un service sur mesure, effectué par des
                professionnels expérimentés, avec des standards rigoureux en
                hygiène, sécurité et respect des lieux.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
            >
              <Button onClick={() => scrollToSection(ref)} variant="secondary">
                Demander une soumission
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row mt-10 2xl:mt-[215px] 2xl:mx-[44px]">
        <div className="w-full lg:m-auto">
          <div className="max-w-[608px] lg:m-auto space-y-[30px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className="title-1"
            >
              Ménage RPA
            </motion.h1>
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className="title-2"
            >
              (Résidences pour aînés)
            </motion.h2>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className=" max-w-[522px] mt-6"
              >
                {"Un environnement propre et sécuritaire pour les aînés :"}
              </motion.p>
              <div className="mt-4 max-w-[590px]">
                {[
                  "Dépoussiérage, balayage, lavage des sols",
                  "Désinfection des surfaces et zones communes",
                  "Offres personnalisées selon les besoins physiques des résidents",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    transition={{
                      // type: "spring",
                      offset: 300,
                    }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      src="/list.svg"
                      alt="list"
                      quality={100} // qualité maximale
                      priority
                      width={16}
                      height={16}
                      className="mt-2"
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <Image
            src="/menage-rpa.png"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={625}
            height={554}
            objectFit="contain"
            className="w-full h-full xl:h-[554px]"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse gap-10 xl:gap-0 lg:flex-row mt-10 2xl:mt-[215px] 2xl:mx-[44px]">
        <div className=" w-full grid lg:grid-cols-2 gap-4 xl:gap-[32px] min-h-[434px]">
          <Image
            src="/menage-commercial.png"
            alt="menage-commercial"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full lg:w-auto h-full"
          />
          <Image
            src="/entretien-menager.png"
            alt="entretien-menager"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full lg:w-auto h-full"
          />
        </div>
        <div className="w-full lg:m-auto">
          <div className="max-w-[608px] lg:m-auto  space-y-[44px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className="title-1"
            >
              Ménage commercial
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className=" max-w-[522px] mt-6"
              >
                {"Pour les entreprises, bureaux et espaces professionnels :"}
              </motion.p>
              <div className="mt-4">
                {[
                  "Dépoussiérage, désinfection, gestion des déchets",
                  "Lavage des vitres, planchers, surfaces communes",
                  "Amélioration de la productivité et de l’image de marque",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    transition={{
                      // type: "spring",
                      offset: 300,
                    }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      src="/list.svg"
                      alt="list"
                      quality={100} // qualité maximale
                      priority
                      width={16}
                      height={16}
                      className="mt-2"
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-10 2xl:mt-[215px] xl:mx-5 2xl:mx-[44px] gap-[30px]">
        <div className="w-full flex flex-col justify-between gap-[68px] lg:gap-0 lg:items-center">
          <div className=" 2xl:w-max">
            <div className=" lg:m-auto space-y-[44px]">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1 hidden sm:block"
              >
                Ménage multilogements
              </motion.h1>
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1 sm:hidden"
              >
                Ménage multi- <br />
                logements
              </motion.h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  className=" max-w-[522px] mt-6"
                >
                  {"Entretien complet des parties communes :"}
                </motion.p>
                <div className="mt-4">
                  {[
                    "Entrées, couloirs, escaliers, ascenseurs",
                    "Espaces extérieurs : stationnement, rampes",
                    "Organisation et propreté pour le confort des résidents",
                  ].map((item, index) => (
                    <motion.div
                      initial={{ y: "100px", opacity: 0 }}
                      whileInView={{ y: "0px", opacity: 1 }}
                      transition={{
                        // type: "spring",
                        offset: 300,
                      }}
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <Image
                        src="/list.svg"
                        alt="list"
                        quality={100} // qualité maximale
                        priority
                        width={16}
                        height={16}
                        className="mt-2"
                      />
                      <label htmlFor={item} className="">
                        {item}
                      </label>
                      {/* <span className="text-gray-700 font-medium">{item}</span> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/menage-multilogement.png"
              alt="Home Image"
              quality={100} // qualité maximale
              priority
              width={625}
              height={334}
              objectFit="contain"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:items-center gap-[68px]">
          <div className=" xl:w-max lg:m-auto">
            <div className=" lg:m-auto space-y-[44px]">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1"
              >
                Ménage résidentiel
              </motion.h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  className=" max-w-[522px] mt-6"
                >
                  {"Un service personnalisé, selon vos besoins :"}
                </motion.p>
                <div className="my-4">
                  {[
                    "Nettoyage des pièces, salles d’eau, cuisine",
                    "Balayage, dépoussiérage, désinfection",
                    "Gestion des ordures, tri, rangement",
                  ].map((item, index) => (
                    <motion.div
                      initial={{ y: "100px", opacity: 0 }}
                      whileInView={{ y: "0px", opacity: 1 }}
                      transition={{
                        // type: "spring",
                        offset: 300,
                      }}
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <Image
                        src="/list.svg"
                        alt="list"
                        quality={100} // qualité maximale
                        priority
                        width={16}
                        height={16}
                        className="mt-2"
                      />
                      <label htmlFor={item} className="">
                        {item}
                      </label>
                      {/* <span className="text-gray-700 font-medium">{item}</span> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/menage-residentiel.png"
              alt="Home Image"
              quality={100} // qualité maximale
              priority
              width={625}
              height={334}
              objectFit="contain"
              className="w-full "
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse gap-10 xl:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-5 2xl:mx-[44px]">
        <div className=" w-full ">
          <Image
            src="/menage-restaurant.png"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full h-full xl:max-h-[554px]"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[608px] lg:m-auto space-y-[44px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className="title-1"
            >
              Ménage pour restaurants
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className=" max-w-[522px] mt-6"
              >
                {"Respect strict des normes d’hygiène alimentaire :"}
              </motion.p>
              <div className="mt-4">
                {[
                  "Nettoyage de cuisines, aires de préparation",
                  "Désinfection des surfaces, équipements et zones sensibles",
                  "Entretien des salles à manger et espaces clients",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    transition={{
                      // type: "spring",
                      offset: 300,
                    }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      src="/list.svg"
                      alt="list"
                      quality={100} // qualité maximale
                      priority
                      width={16}
                      height={16}
                      className="mt-2"
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-5 2xl:mx-[44px]">
        <div className="w-full m-auto">
          <div className="max-w-[608px] lg:m-auto space-y-[44px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className="title-1"
            >
              Ménage après construction
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className=" max-w-[522px] mt-6"
              >
                {"Remise à neuf post-travaux :"}
              </motion.p>
              <div className="mt-4">
                {[
                  "Élimination des débris, poussières et éclaboussures",
                  "Nettoyage approfondi de toutes les surfaces",
                  "Lavage des vitres, planchers, lustrage final",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    transition={{
                      // type: "spring",
                      offset: 300,
                    }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      src="/list.svg"
                      alt="list"
                      quality={100} // qualité maximale
                      priority
                      width={16}
                      height={16}
                      className="mt-2"
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <Image
            src="/menage-construction.png"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full h-full lg:max-h-[554px]"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-10 lg:mt-[215px]   gap-4">
        <div className=" w-full">
          <div className=" lg:m-auto lg:w-max space-y-[70px]">
            <h1 className="title-1 text-primary">Méthodologie SICA</h1>
            <Image
              quality={100}
              priority
              src="/methodologie-sica.svg"
              alt="Home Image"
              width={388}
              height={334}
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[12px] bg-primary w-full"></div>
        </div>
        <motion.div className="w-full">
          {/* Checklist */}
          <div className=" max-w-[555px] lg:m-auto paragraph-1">
            <div className="mt-4 space-y-4">
              {[
                "Produits professionnels adaptés à chaque espace",
                "Équipe formée, fiable et encadrée",
                "Souci du détail et respect des normes de sécurité",
                "Flexibilité des horaires selon vos disponibilités",
              ].map((item, index) => (
                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <Image
                    quality={100}
                    priority
                    src="/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    objectFit="contain"
                    className="mt-2"
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <section
        ref={ref}
        className="flex flex-col lg:flex-row mt-10 2xl:mt-[215px] xl:ml-5 2xl:ml-0 gap-[44px]"
      >
        <div className="mt-[92px] w-full  flex xl:justify-end">
          <div className=" max-w-[675px] ">
            <div className=" m-auto space-y-[44px] paragraph-1">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1"
              >
                Prêt à bénéficier de nos services ?
              </motion.h1>

              {/* Checklist */}
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
              >
                Un espace propre, c’est plus de bien-être, de sécurité et de
                valeur pour votre immeuble ou votre entreprise. <br /> <br />{" "}
                Contactez-nous pour une évaluation gratuite de vos besoins.
              </motion.p>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
              >
                {
                  "Locataire, propriétaire ou promoteur : nous sommes toujours là pour vous"
                }
              </motion.p>
            </div>
          </div>
        </div>
        <Formulaire />
      </section>
    </div>
  );
};

export default Page;
