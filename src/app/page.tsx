import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className=" flex flex-col lg:flex-row px-4 pt-4 gap-20 2xl:gap-[106px]">
        <div className="w-full m-auto flex justify-end ">
          <div className=" max-w-[625px]">
            <h1 className="title-1">
              Votre tranquillité d’esprit, notre priorité.
            </h1>
            <h2 className=" title-2 text-primary">
              Gestion immobilière et Entretien ménager
            </h2>
            <Button variant="secondary" className="mt-5 lg:mt-[64px]">
              Demander une soumission
            </Button>
          </div>
        </div>
        <div className=" w-full">
          <Image
            src="/home-page-image.png"
            alt="Home Image"
            width={625}
            height={787}
            objectFit="contain"
            className="w-full max-h-[787px]"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row container mx-auto mt-[48px]">
        <div className="py-[65px] px-3">
          <Image
            src={"/home-page-image.png"}
            height={433}
            width={433}
            alt="Home Image"
          />
          <div className="pl-3 pt-2">
            <h3 className="title-3 uppercase">Gestion d’immeubles</h3>
            <p className=" paragraph-2 ">
              “Finances, location, relation locataire… <br /> on s’occupe de
              tout.”
            </p>
          </div>
        </div>
        <div className="py-[65px] px-3">
          <Image
            src={"/home-page-image.png"}
            height={433}
            width={433}
            alt="Home Image"
          />
          <div className="pl-3 pt-2">
            <h3 className="title-3 uppercase">Gestion d’immeubles</h3>
            <p className=" paragraph-2 ">
              “Finances, location, relation locataire… <br /> on s’occupe de
              tout.”
            </p>
          </div>
        </div>
        <div className="py-[65px] px-3">
          <Image
            src={"/home-page-image.png"}
            height={433}
            width={433}
            alt="Home Image"
          />
          <div className="pl-3 pt-2">
            <h3 className="title-3 uppercase">Gestion d’immeubles</h3>
            <p className=" paragraph-2 ">
              “Finances, location, relation locataire… <br /> on s’occupe de
              tout.”
            </p>
          </div>
        </div>
        <div className="py-[65px] px-3">
          <Image
            src={"/home-page-image.png"}
            height={433}
            width={433}
            alt="Home Image"
          />
          <div className="pl-3 pt-2">
            <h3 className="title-3 uppercase">Gestion d’immeubles</h3>
            <p className=" paragraph-2 ">
              “Finances, location, relation locataire… <br /> on s’occupe de
              tout.”
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row px-4 gap-10 lg:mt-[215px]">
        <div className=" w-full">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={625}
            height={787}
            objectFit="contain"
            className="w-full max-h-[787px]"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[590px] m-auto space-y-[44px]">
            <h1 className="title-1">Chez SICA</h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <h2>Pourquoi nous choisir ?</h2>
              <p className=" max-w-[522px] mt-6">
                {
                  "Nous adoptons une approche clé en main : du développement à la gestion quotidienne, en passant par l'entretien ménager et lesoutien aux locataires. Notre équipe s'occupe de tout."
                }
              </p>
              <div className="mt-4">
                {[
                  "Suivi transparent en temps réel",
                  "Services sur mesure selon votre immeuble",
                  "Réponses rapides, même en urgence",
                  "Expérience en multilogements, résidentiel, commercial",
                  "Valeurs humaines et professionnalisme",
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
              <p className="text-grey mt-4">
                {
                  '"Vous êtes propriétaire ? Laissez-nous gérer, pendant que vous investissez."'
                }
              </p>
            </div>
            <Button variant="secondary">Obtenir un dévis gratuit</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row  my-20 lg:my-0 lg:mt-[217px] lg:mb-[110px] px-4 gap-10 justify-between container max-w-6xl mx-auto">
        <p className=" max-w-[675px] title-2 leading-[42px]">
          Locataire, propriétaire ou promoteur : nous sommes toujours là pour
          vous
        </p>
        <Button variant="primary">Nous contacter</Button>
      </section>
    </div>
  );
};

export default page;
