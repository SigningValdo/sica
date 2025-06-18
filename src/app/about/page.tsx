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
    <div>
      <section className=" bg-[#1C1C1C] flex flex-col gap-10 lg:flex-row lg:gap-0 pt-[32px] lg:pt-0  lg:mt-[32px]">
        <div className="w-full xl:m-auto p-4 2xl:p-0 ">
          <div className=" max-w-[625px] lg:m-auto space-y-[64px]">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className=" title-1 text-primary"
            >
              Notre mission
            </motion.h1>
            <div className=" max-w-[522px] space-y-6 paragraph-1">
              <motion.h2
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="text-white"
              >
                Chez SICA, notre mission est simple :offrir la tranquillité
                d’esprit aux propriétaires immobiliers, en leur proposant une
                gestion rigoureuse, humaine et complète de leurs immeubles.
              </motion.h2>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className=" text-primary"
              >
                Nous savons à quel point votre investissement est important,
                c’est pourquoi nous mettons tout en œuvre pour le faire
                prospérer.
              </motion.p>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <Image
            src="/notre-mission.png"
            alt="Notre Mission"
            quality={100} // qualité maximale
            priority
            width={625}
            height={662}
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
      </section>
      <section className=" flex flex-col gap-10 lg:flex-row lg:gap-0 mt-10 lg:mt-20 xl:mt-[215px] px-4 xl:px-0 xl:mx-5 2xl:mx-[44px]">
        <div className="w-full lg:m-auto ">
          <div className=" max-w-[625px] lg:m-auto">
            <motion.h1
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
              className=" title-1 "
            >
              Notre approche
            </motion.h1>
            <div className=" max-w-[522px] space-y-6 paragraph-1 mt-6">
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
              >
                Nous adoptons une approche clé en main : du développement à la
                gestion quotidienne, en passant par l’entretien ménager et le
                soutien aux locataires. Notre équipe s’occupe de tout.
              </motion.p>
              <motion.h2
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-2 leading-[42px]"
              >
                Ce qui nous distingue :
              </motion.h2>
              <div className="paragraph-1">
                <div className="my-4">
                  {[
                    "Un service personnalisé basé sur vos besoins réels",
                    "Des outils numériques pour un suivi transparent",
                    "Un accompagnement réactif et professionnel",
                  ].map((item, index) => (
                    <motion.div
                      initial={{ y: "100px", opacity: 0 }}
                      whileInView={{ y: "0px", opacity: 1 }}
                      transition={{
                        // type: "spring",
                        offset: 300,
                      }}
                      key={index}
                      className="flex  items-center space-x-3"
                    >
                      <Image
                        src="/check.svg"
                        alt="check"
                        width={20}
                        height={20}
                        objectFit="contain"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{
                // type: "spring",
                offset: 300,
              }}
            >
              <Button
                onClick={() => scrollToSection(ref)}
                variant="secondary"
                className="mt-[60px]"
              >
                Demander une soumission
              </Button>
            </motion.div>
          </div>
        </div>
        <div className=" w-full">
          <Image
            src="/notre-approche.png"
            alt="Notre Approche"
            quality={100} // qualité maximale
            priority
            width={899}
            height={558}
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse gap-10 lg:flex-row 2xl:gap-0 mt-10 lg:mt-[215px] px-4 xl:px-0 xl:mx-5 2xl:mx-[44px]">
        <div className=" w-full grid lg:grid-cols-2 gap-4 2xl:gap-[32px] min-h-[434px]">
          <Image
            src="/nos-valeurs-1.png"
            alt="Nos Valeurs"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full lg:w-auto h-full"
          />
          <Image
            src="/nos-valeurs-2.png"
            alt="Nos Valeurs"
            quality={100} // qualité maximale
            priority
            width={433}
            height={433}
            objectFit="contain"
            className="w-full lg:w-auto h-full"
          />
        </div>
        <div className="w-full lg:m-auto">
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
              Nos valeurs
            </motion.h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <div>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                >
                  Nous croyons que la réussite en immobilier passe par :
                </motion.p>

                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  className="mt-6"
                >
                  <span className="text-primary"> Transparence :</span> Chaque
                  décision est prise en collaboration avec vous
                </motion.p>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                >
                  <span className="text-primary">Efficacité :</span> Réponses
                  rapides et exécution fiable
                </motion.p>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                >
                  <span className="text-primary">Professionnalisme :</span>{" "}
                  Respect des normes et excellence opérationnelle
                </motion.p>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                >
                  {" "}
                  <span className="text-primary">Respect humain :</span> De vos
                  locataires, de vos immeubles, et de vos priorités
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-[30px] 2xl:mx-[44px] xl:mx-5 mt-10 lg:mt-[215px] px-4 xl:px-0">
        <div className="w-full flex flex-col  lg:items-center gap-[68px] ">
          <div className=" xl:w-max">
            <div className=" m-auto space-y-[44px]">
              <motion.h1
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
                className="title-1"
              >
                Notre équipe
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
                  {
                    "SICA, c’est bien plus qu’une entreprise : c’est une famille de professionnels passionnés, qui évolue dans le domaine immobilier depuis plusieurs années. Chacun de nos gestionnaires, agents et techniciens est formé pour vous offrir un service impeccable, avec une attention particulière aux détails. Les deux co-propriétaires, M. Jacob Poulin et M. Pierre Barthell, sont très fiers de voir grandir la compagnie et de constater l’évolution constante de l’équipe, reflet de l’engagement et du dévouement de chacun."
                  }
                </motion.p>
              </div>
            </div>
          </div>
          <div className=" bg-primary w-full flex items-center justify-center h-[434px]">
            <Image
              src="/notre-equipe.svg"
              alt="Notre Equipe"
              quality={100} // qualité maximale
              priority
              width={625}
              height={334}
              // objectFit="contain"
              className=" "
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:items-center gap-[68px] lg:justify-between">
          <div className=" 2xl:w-max 2xl:m-auto">
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
                Pourquoi nous choisir ?
              </motion.h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <div className="my-4">
                  {[
                    "Vous avez un immeuble et souhaitez le rentabiliser sans stress ?",
                    "Vous manquez de temps pour gérer les appels, les entretiens, les urgences ?",
                    "Vous cherchez un partenaire fiable, transparent et à l’écoute ?",
                  ].map((item, index) => (
                    <motion.div
                      initial={{ y: "100px", opacity: 0 }}
                      whileInView={{ y: "0px", opacity: 1 }}
                      transition={{
                        // type: "spring",
                        offset: 300,
                      }}
                      key={index}
                      className="flex  items-center space-x-3"
                    >
                      <Image
                        src="/check.svg"
                        alt="check"
                        quality={100} // qualité maximale
                        priority
                        width={20}
                        height={20}
                        objectFit="contain"
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  initial={{ y: "100px", opacity: 0 }}
                  whileInView={{ y: "0px", opacity: 1 }}
                  transition={{
                    // type: "spring",
                    offset: 300,
                  }}
                  className="mt-5"
                >
                  SICA est la solution. <br />
                  Nous prenons en charge votre immeuble comme si c’était le
                  nôtre.
                </motion.p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/nous-choisir.png"
              alt="Nous Choisir"
              quality={100} // qualité maximale
              priority
              width={625}
              height={434}
              objectFit="contain"
              className="w-full h-[434px]"
            />
          </div>
        </div>
      </section>
      <section
        ref={ref}
        className=" relative flex flex-col lg:flex-row mt-10 lg:mt-[194px] gap-10 lg:gap-0 px-4 lg:px-0"
      >
        <div className=" lg:mt-[92px] w-full flex flex-col justify-between gap-10 lg:items-center lg:gap-0">
          <div className="max-w-[522px]">
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
                Demandez une soumission
              </motion.h1>
              <motion.p
                initial={{ y: "100px", opacity: 0 }}
                whileInView={{ y: "0px", opacity: 1 }}
                transition={{
                  // type: "spring",
                  offset: 300,
                }}
              >
                Vous souhaitez recevoir une évaluation gratuite de vos besoins
                en gestion ou en entretien ? <br />
                Cliquez ici pour demander une soumission.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full -z-10 absolute bottom-0 hidden lg:block overflow-hidden h-[504px]">
          <Image
            src="/soumission-image.jpg"
            alt="Home Image"
            quality={100} // qualité maximale
            priority
            width={625}
            height={504}
            className="w-full h-full object-cover"
          />
        </div>
        <Formulaire />
      </section>
    </div>
  );
};

export default Page;
