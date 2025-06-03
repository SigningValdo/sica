import Button from "@/components/Button";
import Formulaire from "@/components/Formulaire";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className=" flex flex-col gap-10 xl:gap-0 lg:flex-row">
        <div className=" w-full relative">
          <div className="absolute m-auto w-full bg-white h-[32px] top-1/2 z-10"></div>
          <div className="absolute m-auto h-full bg-white w-[32px] left-1/2 z-10"></div>
          <Image
            src="/entretien-menager-page.png"
            alt="Home Image"
            width={625}
            height={787}
            objectFit="contain"
            className="w-full h-full xl:h-[716px]"
          />
        </div>
        <div className="w-full m-auto ">
          <div className=" max-w-[625px] m-auto space-y-[64px]">
            <h1 className=" title-1">Entretien ménager</h1>
            <div className=" space-y-6">
              <h2 className="title-2 leading-[42px]">
                Un service de propreté adapté à chaque environnement
              </h2>
              <p className="paragraph-1">
                Chez SICA, la propreté ne se résume pas au nettoyage :elle
                contribue à la santé, au confort et à l’image de vos espaces.
                Nous offrons un service sur mesure, effectué par des
                professionnels expérimentés, avec des standards rigoureux en
                hygiène, sécurité et respect des lieux.
              </p>
            </div>
            <Button variant="secondary">Demander une soumission</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-[44px]">
        <div className="w-full m-auto">
          <div className="max-w-[608px] m-auto space-y-[30px]">
            <h1 className="title-1">Ménage RPA</h1>
            <h2 className="title-2">(Résidences pour aînés)</h2>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {"Un environnement propre et sécuritaire pour les aînés :"}
              </p>
              <div className="mt-4 max-w-[590px]">
                {[
                  "Dépoussiérage, balayage, lavage des sols",
                  "Désinfection des surfaces et zones communes",
                  "Offres personnalisées selon les besoins physiques des résidents",
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
            src="/menage-rpa.png"
            alt="Home Image"
            width={625}
            height={554}
            objectFit="contain"
            className="w-full h-full xl:h-[554px]"
          />
        </div>
      </section>
      <section className="flex flex-col-reverse gap-10 xl:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-[44px]">
        <div className=" w-full grid grid-cols-2 gap-4 xl:gap-[32px] min-h-[434px]">
          <Image
            src="/menage-commercial.png"
            alt="menage-commercial"
            width={433}
            height={433}
            objectFit="contain"
            className="w-auto h-full"
          />
          <Image
            src="/entretien-menager.png"
            alt="entretien-menager"
            width={433}
            height={433}
            objectFit="contain"
            className="w-auto h-full"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[608px] m-auto space-y-[44px]">
            <h1 className="title-1">Ménage commercial</h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {"Pour les entreprises, bureaux et espaces professionnels :"}
              </p>
              <div className="mt-4">
                {[
                  "Dépoussiérage, désinfection, gestion des déchets",
                  "Lavage des vitres, planchers, surfaces communes",
                  "Amélioration de la productivité et de l’image de marque",
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
      <section className="flex flex-col lg:flex-row mt-10 2xl:mt-[215px] xl:mx-[44px] gap-[30px]">
        <div className="w-full flex flex-col justify-between items-center">
          <div className=" xl:w-max">
            <div className=" m-auto space-y-[44px]">
              <h1 className="title-1">Ménage multilogements</h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <p className=" max-w-[522px] mt-6">
                  {"Entretien complet des parties communes :"}
                </p>
                <div className="mt-4">
                  {[
                    "Entrées, couloirs, escaliers, ascenseurs",
                    "Espaces extérieurs : stationnement, rampes",
                    "Organisation et propreté pour le confort des résidents",
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
              src="/menage-multilogement.png"
              alt="Home Image"
              width={625}
              height={334}
              objectFit="contain"
              className="w-full max-h-[334px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[68px]">
          <div className=" xl:w-max m-auto">
            <div className=" m-auto space-y-[44px]">
              <h1 className="title-1">Ménage résidentiel</h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <p className=" max-w-[522px] mt-6">
                  {"Un service personnalisé, selon vos besoins :"}
                </p>
                <div className="my-4">
                  {[
                    "Nettoyage des pièces, salles d’eau, cuisine",
                    "Balayage, dépoussiérage, désinfection",
                    "Gestion des ordures, tri, rangement",
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
              src="/menage-residentiel.png"
              alt="Home Image"
              width={625}
              height={334}
              objectFit="contain"
              className="w-full max-h-[334px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 xl:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-[44px]">
        <div className=" w-full ">
          <Image
            src="/menage-restaurant.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
            className="w-full h-full xl:max-h-[554px]"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[608px] m-auto space-y-[44px]">
            <h1 className="title-1">Ménage pour restaurants</h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {"Respect strict des normes d’hygiène alimentaire :"}
              </p>
              <div className="mt-4">
                {[
                  "Nettoyage de cuisines, aires de préparation",
                  "Désinfection des surfaces, équipements et zones sensibles",
                  "Entretien des salles à manger et espaces clients",
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
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row mt-10 2xl:mt-[215px] xl:mx-[44px]">
        <div className="w-full m-auto">
          <div className="max-w-[608px] m-auto space-y-[44px]">
            <h1 className="title-1">Ménage après construction</h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <p className=" max-w-[522px] mt-6">
                {"Remise à neuf post-travaux :"}
              </p>
              <div className="mt-4">
                {[
                  "Élimination des débris, poussières et éclaboussures",
                  "Nettoyage approfondi de toutes les surfaces",
                  "Lavage des vitres, planchers, lustrage final",
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
        <div className=" w-full ">
          <Image
            src="/menage-construction.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
            className="w-full h-full lg:max-h-[554px]"
          />
        </div>
      </section>
      <section></section>
      <section className="flex flex-col lg:flex-row mt-10 2xl:mt-[215px] gap-[44px]">
        <div className="mt-[92px] w-full flex xl:justify-end">
          <div className=" max-w-[675px] ">
            <div className=" m-auto space-y-[44px] paragraph-1">
              <h1 className="title-1">Prêt à bénéficier de nos services ?</h1>

              {/* Checklist */}
              <p>
                Un espace propre, c’est plus de bien-être, de sécurité et de
                valeur pour votre immeuble ou votre entreprise. <br /> <br />{" "}
                Contactez-nous pour une évaluation gratuite de vos besoins.
              </p>
              <p>
                {
                  "Locataire, propriétaire ou promoteur : nous sommes toujours là pour vous"
                }
              </p>
            </div>
          </div>
        </div>
        <Formulaire />
      </section>
    </div>
  );
};

export default page;
