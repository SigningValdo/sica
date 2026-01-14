"use client";
import Button from "@/components/Button";
import Formulaire from "@/components/Formulaire";
import Image from "next/image";
import React, { RefObject } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
// import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const Page = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperRef.current.on("realIndexChange", (s: SwiperType) => {
      setCurrentIndex(s.realIndex + 1);
    });
  }, []);
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="pt-20 lg:pt-[117px] px-4 xl:px-0">
      <section className="2xl:mr-[52px]">
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          className="title-1 lg:pl-40"
        >
          Nous administrons ces blocs
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-[54px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
            <div className="pt-16 ">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className="max-w-[285px] paragraph-1 m-auto"
              >
                {
                  " Chez SICA, nous sommes bien plus qu'une équipe : nous sommes une famille passionnée et expérimentée, en constante expansion,dévouée à aider nos client à gérer et développer leur parc immobilier. Rejoignez-nous dès aujourd'hui !"
                }
              </motion.p>
            </div>
            <div className="hidden md:flex flex-col pt-10 gap-10">
              <div className="flex flex-col items-center justify-center gap-5">
                <Button
                  onClick={() => swiperRef.current?.slideNext()}
                  variant="secondary"
                  className="w-[159px]"
                  iconPosition="right"
                >
                  Suivant
                </Button>
                <Button
                  onClick={() => swiperRef.current?.slidePrev()}
                  variant="secondary"
                  className="w-[159px]"
                  iconPosition="left"
                >
                  Précédent
                </Button>
              </div>
              <p className="-ml-28 text-center">5</p>
            </div>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              onSlideChange={() => console.log(currentIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className=" w-full"
              // allowTouchMove={false}
            >
              <SwiperSlide>
                {" "}
                <div className="">
                  <Image
                    src={"/Image - 01.jpg"}
                    height={433}
                    width={433}
                    quality={100}
                    priority
                    className="w-[433px] h-[433px] object-cover"
                    alt="logement-haut-gamme"
                  />
                  <div className="pt-[33px]">
                    <motion.h3
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className="title-3 uppercase"
                    >
                      Complexe le Baronet
                    </motion.h3>
                    <motion.p
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className=" paragraph-1 "
                    >
                      23 logements répartie sur 4 étages avec différent type de
                      3 ½, 4 ½ et 5 ½
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <Image
                    src={"/Image - 02.jpg"}
                    height={433}
                    width={433}
                    quality={100}
                    priority
                    alt="Gestion 6 logements"
                    className="w-[433px] h-[433px] object-cover"
                  />
                  <div className="pt-[33px]">
                    <motion.h3
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className="title-3 uppercase"
                    >
                      Complexe le Baronet
                    </motion.h3>
                    <motion.p
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className=" paragraph-1 "
                    >
                      64 logements répartie sur 4 étages offrant une piscine
                      extérieure, gym, salle commune et stationnement intérieur
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="">
                  <Image
                    src={"/Image - 03.jpg"}
                    height={433}
                    width={433}
                    quality={100}
                    priority
                    alt="logement-haut-gamme"
                    className="w-[433px] h-[433px] object-cover"
                  />
                  <div className="pt-[33px]">
                    <motion.h3
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className="title-3 uppercase"
                    >
                      Établissement Pech
                    </motion.h3>
                    <motion.p
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className=" paragraph-1 "
                    >
                      77 logements répartie sur 10 étages avec local commercial
                      et café au rez-de-chaussée
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <Image
                    src={"/Image - 04.jpg"}
                    height={433}
                    width={433}
                    quality={100}
                    priority
                    alt="Gestion 6 logements"
                    className="w-[433px] h-[433px] object-cover"
                  />
                  <div className="pt-[33px]">
                    <motion.h3
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className="title-3 uppercase"
                    >
                      Établissement Pech
                    </motion.h3>
                    <motion.p
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className=" paragraph-1 "
                    >
                      11 logements répartie sur 3 étages avec garage double et
                      local commercial
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <Image
                    src={"/Immeuble-exterieur 2.jpg"}
                    height={433}
                    width={433}
                    quality={100}
                    priority
                    alt="Gestion 6 logements"
                    className="w-[433px] h-[433px] object-cover"
                  />
                  <div className="pt-[33px]">
                    <motion.h3
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className="title-3 uppercase leading-[22px]"
                    >
                      30 logements modernes dans un immeubles de 4 étages
                    </motion.h3>
                    <motion.p
                      // initial={{ y: "100px", opacity: 0 }}
                      // whileInView={{ y: "0px", opacity: 1 }}
                      className=" paragraph-1 "
                    >
                      L’immeuble Livernois séduit par son architecture
                      contemporaine raffinée, sa généreuse fenestration, ses
                      balcons invitants et le choix de matériaux haut de gamme
                      qui témoignent d’un souci du détail remarquable.
                    </motion.p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex md:hidden flex-col pt-10 gap-10">
            <div className="flex flex-col items-center justify-center gap-5">
              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="secondary"
                className="w-[159px]"
                iconPosition="right"
              >
                Suivant
              </Button>
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="secondary"
                className="w-[159px]"
                iconPosition="left"
              >
                Précédent
              </Button>
            </div>
            <p className="-ml-28 text-center">5</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row  max-2xl:gap-10 mt-10 lg:mt-[270px]">
        <div className=" w-full lg:m-auto">
          <motion.h1
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0px", opacity: 1 }}
            className="max-w-[675px] lg:m-auto mb-20 title-1"
          >
            On optimise, on anticipe et on valorise votre bien.
          </motion.h1>
          <Image
            quality={100}
            priority
            src="/valorisation-bien.jpg"
            alt="Home Image"
            width={625}
            height={787}
            className="w-full max-h-[478px] object-contain"
          />
        </div>
        <motion.div
          // initial={{ y: "100px", opacity: 0 }}
          // whileInView={{ y: "0px", opacity: 1 }}
          // transition={{
          //   // type: "spring",
          //   offset: 300,
          // }}
          className="w-full lg:pt-[90px]"
        >
          <div className="max-w-[675px] lg:m-auto space-y-[44px]">
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className="title-2 leading-[42px]"
            >
              Parce qu’on ne fait pas que gérer : <br />
              on optimise, on anticipe et on valorise votre bien. <br /> <br />{" "}
              Notre offre s’adresse aux propriétaires de multilogements,
              d’immeubles commerciaux ou résidentiels, qui veulent un service
              complet, structuré et transparent.
            </motion.div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
            >
              <Button onClick={() => scrollToSection(ref)} variant="secondary">
                Demander une soumission
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-10 lg:mt-[215px] xl:mx-[44px]">
        <div className="w-full m-auto">
          <motion.div
            // initial={{ y: "100px", opacity: 0 }}
            // whileInView={{ y: "0px", opacity: 1 }}
            // transition={{
            //   // type: "spring",
            //   offset: 300,
            // }}
            className="max-w-[608px] lg:m-auto space-y-[44px]"
          >
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className="title-1"
            >
              Location et cession <br /> de bail
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className=" max-w-[522px] mt-6"
              >
                {
                  "SICA vous aide à remplir vos logements avec des locataires fiables :"
                }
              </motion.p>
              <div className="mt-4">
                {[
                  "Analyse de marché et stratégie de mise en marché",
                  "Prise de photos professionnelles",
                  "Réception des appels + organisation des visites",
                  "Sélection rigoureuse avec enquêtes complètes : crédit, criminel, antécédents au TAL, références d'ancien propriétaire, signature du bail et annexe, déménagement et remise des clés.",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      quality={100}
                      priority
                      src="/list.svg"
                      alt="list"
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
          </motion.div>
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-[32px]">
          <Image
            src="/location-cession-bail-1.png"
            alt="Home Image"
            width={433}
            height={433}
            className="object-contain"
          />
          <Image
            src="/location-cession-bail-2.png"
            alt="Home Image"
            width={433}
            height={433}
            className="object-contain"
          />
          <Image
            src="/location-cession-bail-3.png"
            alt="Home Image"
            width={433}
            height={433}
            className="object-contain"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row gap-10 xl:gap-0 mt-10 lg:mt-[215px]">
        <div className=" w-full">
          <Image
            src="/Entretien-maintenance.png"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={625}
            height={554}
            className="w-full h-full xl:max-h-[554px] object-contain"
          />
        </div>
        <motion.div
          // initial={{ y: "100px", opacity: 0 }}
          // whileInView={{ y: "0px", opacity: 1 }}
          // transition={{
          //   // type: "spring",
          //   offset: 300,
          // }}
          className="w-full m-auto"
        >
          <div className="max-w-[608px] lg:m-auto space-y-[44px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className="title-1"
            >
              Entretien et <br /> maintenance
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className=" max-w-[522px] mt-6"
              >
                {
                  "Fini les appels d’urgence à toute heure. SICA coordonne et supervise tous les travaux nécessaires :"
                }
              </motion.p>
              <div className="mt-4">
                {[
                  "Négociation de contrats de service (neige, gazon, vitres…)",
                  "Gestion des petits et gros travaux",
                  "Planification et suivi avec notre technicien maintenance",
                  "Garantie de respect des normes",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <Image
                      quality={100}
                      priority
                      src="/list.svg"
                      alt="list"
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
        </motion.div>
      </section>
      <section className="mt-10 lg:mt-[215px]">
        <div className=" flex justify-end w-full">
          <div className="h-[12px] bg-primary w-1/2"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] xl:mx-[44px] mt-[34px] ">
          <div className="w-full flex flex-col gap-10 lg:gap-0 justify-between xl:items-center">
            <motion.div
              // initial={{ y: "100px", opacity: 0 }}
              // whileInView={{ y: "0px", opacity: 1 }}
              // transition={{
              //   // type: "spring",
              //   offset: 300,
              // }}
              className=" lg:w-max "
            >
              <div className=" lg:m-autospace-y-[44px]">
                <motion.h1
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  className="title-1"
                >
                  Service à la clientèle <br />
                  24h/7
                </motion.h1>

                {/* Checklist */}
                <div className="paragraph-1">
                  <motion.p
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    className=" max-w-[522px] mt-6"
                  >
                    {
                      "SICA s’assure que vos locataires soient servis rapidement et que vous restiez informé sans vous occuper des détails :"
                    }
                  </motion.p>
                  <div className="mt-4">
                    {[
                      "Réception des appels et courriels",
                      "Renouvellement des baux",
                      "Préparation et envoi des avis",
                      "Relevés 31",
                      "Archivage numérique sécurisé des échanges",
                    ].map((item, index) => (
                      <motion.div
                        initial={{ y: "100px", opacity: 0 }}
                        whileInView={{ y: "0px", opacity: 1 }}
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <Image
                          quality={100}
                          priority
                          src="/list.svg"
                          alt="list"
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
            </motion.div>
            <div className=" w-full">
              <Image
                src="/service-clientele.png"
                alt="Home Image"
                quality={100} // qualité maximale
                priority
                width={625}
                height={334}
                className="w-full max-h-[334px] object-contain"
              />
            </div>
          </div>
          <div className="w-full flex flex-col  gap-10 lg:gap-[96px]">
            <motion.div
              // initial={{ y: "100px", opacity: 0 }}
              // whileInView={{ y: "0px", opacity: 1 }}
              // transition={{
              //   // type: "spring",
              //   offset: 300,
              // }}
              className=" lg:w-max lg:m-auto"
            >
              <div className=" lg:m-autospace-y-[44px]">
                <motion.h1
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  className="title-1"
                >
                  Gestion financière et <br /> comptabilité
                </motion.h1>

                {/* Checklist */}
                <div className="paragraph-1">
                  <motion.p
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    className=" max-w-[522px] mt-6"
                  >
                    {
                      "SICA prend en charge tous les aspects administratifs et financiers pour vous faire gagner du temps et sécuriser vos revenus :"
                    }
                  </motion.p>
                  <div className="my-4">
                    {[
                      "Réception et dépôt des loyers",
                      "Production de reçus (incluant paiements en espèces)",
                      "Recouvrement des arriérés",
                      "Suivi des revenus/dépenses via logiciel de gestion",
                      "Vérification des comptes à payer",
                      "Conciliation bancaire mensuelle",
                      "États financiers et rapports mensuels",
                    ].map((item, index) => (
                      <motion.div
                        initial={{ y: "100px", opacity: 0 }}
                        whileInView={{ y: "0px", opacity: 1 }}
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <Image
                          quality={100}
                          priority
                          src="/list.svg"
                          alt="list"
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
                  <motion.p
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                  >
                    {
                      "Travaux de fermeture d’année et vérification par CPA non inclus"
                    }
                  </motion.p>
                </div>
              </div>
            </motion.div>
            <div className=" w-full">
              <Image
                quality={100} // qualité maximale
                priority
                src="/gestion-financière.png"
                alt="Home Image"
                width={625}
                height={334}
                className="w-full max-h-[334px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-10 lg:mt-[215px] justify-center  gap-4">
        <motion.div
          // initial={{ y: "100px", opacity: 0 }}
          // whileInView={{ y: "0px", opacity: 1 }}
          // transition={{
          //   // type: "spring",
          //   offset: 300,
          // }}
          className="lg:w-[555px] space-y-[44px]"
        >
          {/* Checklist */}
          <div className="paragraph-1">
            <motion.p
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className=" font-bold"
            >
              {"Avec SICA, vous bénéficiez de :"}
            </motion.p>
            <div className="mt-4 space-y-4">
              {[
                "Un service centralisé et structuré",
                "Une équipe réactive et expérimentée",
                "Des outils numériques pour un suivi en temps réel",
                "La tranquillité d’esprit d’un immeuble bien géré",
              ].map((item, index) => (
                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
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
                    className="mt-2 object-contain"
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="">
          <Image
            quality={100}
            priority
            src="/sica-benefice.png"
            alt="Home Image"
            width={388}
            height={334}
            className="object-contain"
          />
        </div>
      </section>
      <section
        ref={ref}
        className="flex flex-col lg:flex-row mt-10 lg:mt-[194px] gap-10 xl:ml-5 2xl:ml-0lg:gap-[44px]"
      >
        <motion.div
          // initial={{ y: "100px", opacity: 0 }}
          // whileInView={{ y: "0px", opacity: 1 }}
          // transition={{
          //   // type: "spring",
          //   offset: 300,
          // }}
          className="lg:mt-[92px] w-full flex lg:justify-end"
        >
          <div className=" max-w-[675px] ">
            <div className=" lg:m-auto space-y-[44px] paragraph-1">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className="title-1"
              >
                Obtenez une offre <br /> maintenant
              </motion.h1>

              {/* Checklist */}
              <motion.p>
                {
                  "Locataire, propriétaire ou promoteur : nous sommes toujours là pour vous"
                }
              </motion.p>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className=" max-w-[522px] mt-6"
              >
                {"SICA est un membre partenaire de la CORPIQ"}
              </motion.p>
              <Image
                quality={100}
                priority
                src={"/corpiq-white.jpg"}
                alt="Corpiq"
                height={78}
                width={225}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </motion.div>
        <Formulaire />
      </section>
    </div>
  );
};

export default Page;
