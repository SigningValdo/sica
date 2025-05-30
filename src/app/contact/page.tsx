import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="flex">
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
            src="/chez-sica.png"
            alt="Home Image"
            width={517}
            height={504}
            className="w-[517px] max-h-[148px]"
          />
        </div>
        <form className="w-full pt-[60px] pl-[44px] pb-[116px] pr-[122px] border border-black space-y-[44px]">
          <div className="space-y-4">
            <div className=" flex flex-col gap-4">
              <label htmlFor="Nom">Nom</label>
              <input type="text" className="input-style" placeholder="Nom*" />
            </div>
            <div className=" flex flex-col gap-4">
              <label htmlFor="Nom">Nom</label>
              <input type="text" className="input-style" placeholder="Nom*" />
            </div>
            <div className="flex w-full">
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
      <section className="container max-w-7xl m-auto mt-[76px]">
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
      <section className="flex mt-[60px] mb-[119px] mx-[44px]">
        <Image
          src="/chez-sica.png"
          alt="Home Image"
          width={517}
          height={504}
          className="w-full max-h-[539px]"
        />
      </section>
    </div>
  );
};

export default page;
