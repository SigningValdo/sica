"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className=" flex flex-col lg:flex-row gap-20 xl:gap-[106px]">
        <div className="w-full xl:m-auto flex xl:justify-end ">
          <motion.div
            // initial={{ y: "100px", opacity: 0 }}
            // whileInView={{ y: "0px", opacity: 1 }}
            // transition={{
            //   type: "spring",
            //   offset: 300,
            // }}
            className=" max-w-[625px]"
          >
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className="title-1"
            >
              Votre tranquillité d’esprit, notre priorité.
            </motion.h1>
            <motion.h2
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className=" title-2 text-primary"
            >
              Gestion immobilière et Entretien ménager
            </motion.h2>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
            >
              <Link href="/contact">
                <Button variant="secondary" className="mt-5 lg:mt-[64px]">
                  Demander une soumission
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className=" w-full">
          <Image
            src="/home-page-image.png"
            alt="Home Image"
            width={625}
            height={787}
            quality={100} // qualité maximale
            priority
            className="w-full h-full xl:max-h-[787px] object-contain"
          />
        </div>
      </section>
      <section className="grid bg-white md:grid-cols-2 lg:grid-cols-4 mt-[48px] pb-2">
        {Services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className="py-[65px] hover:bg-[#D9D9D9] border-b-[8px] border-white hover:border-b-[8px] hover:border-primary transition-all duration-300 px-3"
          >
            <Image
              src={service.image}
              height={433}
              width={433}
              quality={100}
              priority
              alt="Home Image"
            />
            <div className="pl-3 pt-2">
              <h3 className="title-3 uppercase">{service.title}</h3>
              <p className=" paragraph-2 w-[285px] ">{service.description}</p>
            </div>
          </Link>
        ))}
      </section>
      <section className="flex bg-white flex-col lg:flex-row gap-10 lg:mt-10 xl:mt-[215px]">
        <div className=" w-full">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={625}
            height={787}
            quality={100}
            priority
            className="w-full h-full xl:max-h-[787px] object-contain"
          />
        </div>
        <div className="w-full m-auto">
          <motion.div
            // initial={{ y: "100px", opacity: 0 }}
            // whileInView={{ y: "0px", opacity: 1 }}
            // transition={{
            //   // type: "spring",
            //   offset: 300,
            // }}
            className="max-w-[590px] xl:m-auto space-y-[44px]"
          >
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              className="title-1"
            >
              Chez SICA
            </motion.h1>

            {/* Checklist */}
            <motion.div
              // initial={{ y: "100px", opacity: 0 }}
              // whileInView={{ y: "0px", opacity: 1 }}
              // transition={{
              //   // type: "spring",
              //   offset: 300,
              // }}
              className="paragraph-1"
            >
              <motion.h2
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
              >
                Pourquoi nous choisir ?
              </motion.h2>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                className=" max-w-[522px] mt-6"
              >
                {
                  "Nous adoptons une approche clé en main : du développement à la gestion quotidienne, en passant par l'entretien ménager et le soutien aux locataires. Notre équipe s'occupe de tout."
                }
              </motion.p>
              <div className="mt-4">
                {[
                  "Suivi transparent en temps réel",
                  "Services sur mesure selon votre immeuble",
                  "Réponses rapides, même en urgence",
                  "Expérience en multilogements, résidentiel, commercial",
                  "Valeurs humaines et professionnalisme",
                ].map((item, index) => (
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    whileInView={{ y: "0px", opacity: 1 }}
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <Image
                      quality={100}
                      priority
                      src="/list.svg"
                      alt="list"
                      width={16}
                      height={16}
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
                className="text-grey mt-4"
              >
                {
                  '"Vous êtes propriétaire ? Laissez-nous gérer, pendant que vous investissez."'
                }
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
            >
              <Link href="/contact">
                <Button variant="secondary">Obtenir un devis gratuit</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row my-20 lg:my-0 lg:mt-[217px] lg:mb-[110px] px-4 gap-10 justify-between container max-w-6xl xl:mx-auto">
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0px", opacity: 1 }}
          className=" max-w-[675px] title-2 leading-[42px]"
        >
          Locataire, propriétaire ou promoteur : nous sommes toujours là pour
          vous
        </motion.p>
        <Link href="/contact">
          <Button variant="primary">Nous contacter</Button>
        </Link>
      </section>
    </div>
  );
};

export default page;

const Services = [
  {
    title: "Gestion d’immeubles",
    description: "Finances, location, relation locataire… on s’occupe de tout.",
    image: "/gestion-immeuble.png",
    link: "/gestion-immobiliere",
  },
  {
    title: "Entretien ménager",
    description: "Des espaces impeccables, du CPE à l’immeuble à logements.",
    image: "/entretien-menager.png",
    link: "/entretien-menager",
  },
  {
    title: "À propos",
    description: "Une équipe passionnée, un accompagnement complet.",
    image: "/about.png",
    link: "/about",
  },
  {
    title: "Services aux locataires",
    description: "Un suivi humain, rapide, 24/7",
    image: "/services-locaux.png",
    link: "/contact",
  },
];
