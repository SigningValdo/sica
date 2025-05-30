"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 lg:pt-[117px] px-4 lg:px-0">
      <section className="lg:mr-[52px]">
        <h1 className="title-1 lg:pl-40">Nous administrons ces blocs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mt-[54px]">
          <div className="pt-16 ">
            <p className="max-w-[285px] paragraph-1 m-auto">
              {
                " Chez SICA, nous sommes bien plus qu'une équipe : nous sommes une famille passionnée et expérimentée, en constante expansion,dévouée à aider nos client à gérer et développer leur parc immobilier. Rejoignez-nous dès aujourd'hui !"
              }
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Button variant="secondary">Suivant</Button>
            <Button variant="secondary">Précédent</Button>
          </div>
          <div className="">
            <Image
              src={"/home-page-image.png"}
              height={433}
              width={433}
              alt="Home Image"
            />
            <div className="pt-[33px]">
              <h3 className="title-3 uppercase">30 logements haut de gamme</h3>
              <p className=" paragraph-1 ">
                30 logements haut de gamme, dont 12 maisons de ville, en bordure
                de la rivière Saint-Charles et à deux pas du parc des Saules.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={"/home-page-image.png"}
              height={433}
              width={433}
              alt="Home Image"
            />
            <div className="pt-[33px]">
              <h3 className="title-3 uppercase">Gestion 6 logements</h3>
              <p className=" paragraph-1 ">
                {
                  "Un grand merci à notre client pour sa confiance dans la gestion de la location et l'entretien ménager !"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-10 lg:mt-[270px]">
        <div className=" w-full">
          <h1 className="max-w-[675px] lg:m-auto mb-20 title-1">
            On optimise, on anticipe et on valorise votre <br /> bien.
          </h1>
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={625}
            height={787}
            objectFit="contain"
            className="w-full max-h-[478px]"
          />
        </div>
        <div className="w-full lg:pt-[90px]">
          <div className="max-w-[675px] lg:m-auto space-y-[44px]">
            <div className="title-2 leading-[42px]">
              Parce qu’on ne fait pas que gérer : <br />
              on optimise, on anticipe et on valorise votre bien. <br /> <br />{" "}
              Notre offre s’adresse aux propriétaires de multilogements,
              d’immeubles commerciaux ou résidentiels, qui veulent un service
              complet, structuré et transparent.
            </div>
            <Button variant="secondary">Demander une soumission</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-10 lg:mt-[215px] lg:mx-[44px]">
        <div className="w-full m-auto">
          <div className="max-w-[608px] lg:m-auto space-y-[44px]">
            <h1 className="title-1">
              Location et cession <br /> de bail
            </h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {
                  "SICA vous aide à remplir vos logements avec des locataires fiables :"
                }
              </p>
              <div className="mt-4">
                {[
                  "Analyse de marché et stratégie de mise en marché",
                  "Prise de photos professionnelles",
                  "Réception des appels + organisation des visites",
                  "Sélection rigoureuse avec enquêtes complètes :Crédit, criminel, antécédents au TAL, références Signature du bail + annexes + remise des clés",
                ].map((item, index) => (
                  <div key={index} className="flex space-x-3">
                    <input
                      id="politique"
                      type="checkbox"
                      // {...register("politique", {
                      //   required:
                      //     "Vous devez accepter la politique de confidentialité",
                      // })}
                      className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full grid md:grid-cols-2 gap-[32px]">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
          />
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
          />
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-10 lg:mt-[215px]">
        <div className=" w-full">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={625}
            height={554}
            objectFit="contain"
            className="w-full max-h-[554px]"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[608px] lg:m-auto space-y-[44px]">
            <h1 className="title-1">
              Entretien et <br /> maintenance
            </h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {
                  "Fini les appels d’urgence à toute heure. SICA coordonne et supervise tous les travaux nécessaires :"
                }
              </p>
              <div className="mt-4">
                {[
                  "Négociation de contrats de service (neige, gazon, vitres…)",
                  "Gestion des petits et gros travaux",
                  "Planification et suivi avec notre technicien maintenance",
                  "Garantie de respect des normes",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      id="politique"
                      type="checkbox"
                      // {...register("politique", {
                      //   required:
                      //     "Vous devez accepter la politique de confidentialité",
                      // })}
                      className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
                    />
                    <label htmlFor={item} className="">
                      {item}
                    </label>
                    {/* <span className="text-gray-700 font-medium">{item}</span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] lg:mx-[44px] mt-10 lg:mt-[215px]">
        <div className="w-full flex flex-col gap-10 lg:gap-0 justify-between lg:items-center">
          <div className=" lg:w-max ">
            <div className=" lg:m-autospace-y-[44px]">
              <h1 className="title-1">
                Service à la clientèle <br />
                24h/7
              </h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <p className=" max-w-[522px] mt-6">
                  {
                    "SICA s’assure que vos locataires soient servis rapidement et que vous restiez informé sans vous occuper des détails :"
                  }
                </p>
                <div className="mt-4">
                  {[
                    "Réception des appels et courriels",
                    "Renouvellement des baux",
                    "Préparation et envoi des avis",
                    "Relevés 31",
                    "Archivage numérique sécurisé des échanges",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <input
                        id="politique"
                        type="checkbox"
                        // {...register("politique", {
                        //   required:
                        //     "Vous devez accepter la politique de confidentialité",
                        // })}
                        className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
                      />
                      <label htmlFor={item} className="">
                        {item}
                      </label>
                      {/* <span className="text-gray-700 font-medium">{item}</span> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/chez-sica.png"
              alt="Home Image"
              width={625}
              height={334}
              objectFit="contain"
              className="w-full max-h-[334px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col  gap-10 lg:gap-[96px]">
          <div className=" lg:w-max lg:m-auto">
            <div className=" lg:m-autospace-y-[44px]">
              <h1 className="title-1">
                Gestion financière et <br /> comptabilité
              </h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <p className=" max-w-[522px] mt-6">
                  {
                    "SICA prend en charge tous les aspects administratifs et financiers pour vous faire gagner du temps et sécuriser vos revenus :"
                  }
                </p>
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
                    <div key={index} className="flex items-center space-x-3">
                      <input
                        id="politique"
                        type="checkbox"
                        // {...register("politique", {
                        //   required:
                        //     "Vous devez accepter la politique de confidentialité",
                        // })}
                        className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
                      />
                      <label htmlFor={item} className="">
                        {item}
                      </label>
                      {/* <span className="text-gray-700 font-medium">{item}</span> */}
                    </div>
                  ))}
                </div>
                <p>
                  {
                    "Travaux de fermeture d’année et vérification par CPA non inclus"
                  }
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <Image
              src="/chez-sica.png"
              alt="Home Image"
              width={625}
              height={334}
              objectFit="contain"
              className="w-full max-h-[334px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-10 lg:mt-[215px] justify-center  gap-4">
        <div className="lg:w-[555px] space-y-[44px]">
          {/* Checklist */}
          <div className="paragraph-1">
            <p className=" font-bold">{"Avec SICA, vous bénéficiez de :"}</p>
            <div className="mt-4 space-y-4">
              {[
                "Un service centralisé et structuré",
                "Une équipe réactive et expérimentée",
                "Des outils numériques pour un suivi en temps réel",
                "La tranquillité d’esprit d’un immeuble bien géré",
              ].map((item, index) => (
                <div key={index} className="flex  items-center space-x-3">
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    objectFit="contain"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={388}
            height={334}
            objectFit="contain"
            className="w-full lg:w-auto"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-10 lg:mt-[194px] gap-10 lg:gap-[44px]">
        <div className="lg:mt-[92px] w-full flex lg:justify-end">
          <div className=" max-w-[675px] ">
            <div className=" lg:m-auto space-y-[44px] paragraph-1">
              <h1 className="title-1">
                Obtenez une offre <br /> maintenant
              </h1>

              {/* Checklist */}
              <p>
                {
                  "Locataire, propriétaire ou promoteur : nous sommes toujours là pour vous"
                }
              </p>
              <p>{"SICA est un membre partenaire de la CORPIQ"}</p>
              <Image
                src={"/corpiq-white.jpg"}
                alt="Corpiq"
                height={78}
                width={225}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
        <form className="w-full p-4 pt-[60px] lg:pl-[44px] lg:pb-[116px] lg:pr-[122px] border border-black space-y-[44px]">
          <div className="space-y-4">
            <div className=" flex flex-col gap-4">
              <label htmlFor="Nom">Nom</label>
              <input type="text" className="input-style" placeholder="Nom*" />
            </div>
            <div className=" flex flex-col gap-4">
              <label htmlFor="Nom">Nom</label>
              <input type="text" className="input-style" placeholder="Nom*" />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <div className=" w-full flex flex-col gap-4">
                <label htmlFor="Nom">Nom</label>
                <input type="text" className="input-style" placeholder="Nom*" />
              </div>
              <div className=" w-full flex flex-col gap-4">
                <label htmlFor="Nom">Nom</label>
                <input type="text" className="input-style" placeholder="Nom*" />
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <label htmlFor="Nom">Nom</label>
              <input type="text" className="input-style" placeholder="Nom*" />
            </div>
            <div className=" flex flex-col gap-4">
              <textarea
                name="Message"
                id="Message"
                className="input-style flex"
                placeholder="Message*"
              />
              <label htmlFor="Message">Message</label>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <input
              id="politique"
              type="checkbox"
              // {...register("politique", {
              //   required:
              //     "Vous devez accepter la politique de confidentialité",
              // })}
              className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
            />
            <label htmlFor="politique" className="">
              {"J'ai lu et "}
              <span className=" underline">
                {" j'accepte la politique de confidentialité."}
              </span>
            </label>
          </div>
          <Button variant="secondary">Envoyer</Button>
        </form>
      </section>
    </div>
  );
};

export default page;
