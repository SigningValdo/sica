import Formulaire from "@/components/Formulaire";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-0">
      <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row">
        <div className="mt-[92px] w-full flex flex-col justify-between items-center">
          <div className="max-w-[522px]">
            <div className=" m-auto space-y-6 paragraph-1">
              <h1 className="title-1">
                Vous avez un immeuble à gérer ? Un besoin d’entretien ?
              </h1>
              <div>
                <h2 className="title-2 text-primary">Parlons-en</h2>
                <p>
                  {" "}
                  Chez SICA, nous croyons à l’importance du contact humain.{" "}
                  <br /> <br /> Que vous soyez propriétaire, gestionnaire, ou
                  futur locataire, notre équipe est disponible et réactive pour
                  répondre à vos besoins.
                </p>
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
      <section className="container max-w-7xl m-auto mt-[76px] lg:mx-[44px]">
        <p className="title-2 leading-[42px]">
          Courriels : <br /> info@sica-quebec.ca
        </p>
        <p className="title-2 leading-[42px] mt-6">
          Téléphones : <br /> 581-424-4444
        </p>
        <p className="title-2 leading-[42px] mt-[76px]">
          Notre adresse : 420-A rang Saint-Gabriel, Vallée-Jonction, QC G0S 3J0
        </p>
      </section>
      <section className="flex mt-[60px] mb-[119px] lg:mx-[44px]">
        <Image
          src="/map.png"
          alt="Map"
          width={517}
          height={504}
          className="w-full max-h-[539px]"
        />
      </section>
    </div>
  );
};

export default page;
