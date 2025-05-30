import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className=" bg-black flex mt-[32px]">
        <div className="w-full m-auto ">
          <div className=" max-w-[625px] m-auto space-y-[64px]">
            <h1 className=" title-1 text-primary">Notre mission</h1>
            <div className=" max-w-[522px] space-y-6 paragraph-1">
              <h2 className="text-white">
                Chez SICA, notre mission est simple :offrir la tranquillité
                d’esprit aux propriétaires immobiliers, en leur proposant une
                gestion rigoureuse, humaine et complète de leurs immeubles.
              </h2>
              <p className=" text-primary">
                Nous savons à quel point votre investissement est important,
                c’est pourquoi nous mettons tout en œuvre pour le faire
                prospérer.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full ">
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
      <section className=" flex mt-[215px] mx-[44px]">
        <div className="w-full m-auto ">
          <div className=" max-w-[625px] m-auto">
            <h1 className=" title-1 ">Notre approche</h1>
            <div className=" max-w-[522px] space-y-6 paragraph-1 mt-6">
              <p>
                Nous adoptons une approche clé en main : du développement à la
                gestion quotidienne, en passant par l’entretien ménager et le
                soutien aux locataires. Notre équipe s’occupe de tout.
              </p>
              <h2 className="title-2 leading-[42px]">
                Ce qui nous distingue :
              </h2>
              <div className="paragraph-1">
                <div className="my-4">
                  {[
                    "Un service personnalisé basé sur vos besoins réels",
                    "Des outils numériques pour un suivi transparent",
                    "Un accompagnement réactif et professionnel",
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
            <Button variant="secondary" className="mt-[60px]">
              Demander une soumission
            </Button>
          </div>
        </div>
        <div className=" w-full ">
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
      <section className="flex mt-[215px] mx-[44px]">
        <div className=" w-full grid grid-cols-2 gap-[32px] min-h-[434px]">
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
            className="w-auto h-full"
          />
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={433}
            height={433}
            objectFit="contain"
            className="w-auto h-full"
          />
        </div>
        <div className="w-full m-auto">
          <div className="max-w-[608px] m-auto space-y-[44px]">
            <h1 className="title-1">Nos valeurs</h1>

            {/* Checklist */}
            <div className="paragraph-1">
              <div>
                <p>Nous croyons que la réussite en immobilier passe par :</p>

                <p className="mt-6">
                  <span className="text-primary"> Transparence :</span> Chaque
                  décision est prise en collaboration avec vous
                </p>
                <p>
                  <span className="text-primary">Efficacité :</span> Réponses
                  rapides et exécution fiable
                </p>
                <p>
                  <span className="text-primary">Professionnalisme :</span>{" "}
                  Respect des normes et excellence opérationnelle
                </p>
                <p>
                  {" "}
                  <span className="text-primary">Respect humain :</span> De vos
                  locataires, de vos immeubles, et de vos priorités
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-[30px] mx-[44px] mt-[215px]">
        <div className="w-full flex flex-col justify-between items-center">
          <div className=" w-max">
            <div className=" m-auto space-y-[44px]">
              <h1 className="title-1">Notre équipe</h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <p className=" max-w-[522px] mt-6">
                  {
                    "SICA, c’est bien plus qu’une entreprise : c’est une famille de professionnels passionnés, qui évolue dans le domaine immobilier depuis plusieurs années. Chacun de nos gestionnaires, agents et techniciens est formé pour vous offrir un service impeccable, avec une attention particulière aux détails."
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
        <div className="w-full flex flex-col items-center gap-[68px]">
          <div className=" w-max m-auto">
            <div className=" m-auto space-y-[44px]">
              <h1 className="title-1">Pourquoi nous choisir ?</h1>

              {/* Checklist */}
              <div className="paragraph-1">
                <div className="my-4">
                  {[
                    "Vous avez un immeuble et souhaitez le rentabiliser sans stress ?",
                    "Vous manquez de temps pour gérer les appels, les entretiens, les urgences ?",
                    "Vous cherchez un partenaire fiable, transparent et à l’écoute ?",
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
                <p className="mt-5">
                  SICA est la solution. <br />
                  Nous prenons en charge votre immeuble comme si c’était le
                  nôtre.
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
      <section className="flex mt-[194px]">
        <div className="mt-[92px] w-full flex flex-col justify-between items-center">
          <div className="max-w-[522px]">
            <div className=" m-auto space-y-[44px] paragraph-1">
              <h1 className="title-1">Demandez une soumission</h1>
              <p>
                Vous souhaitez recevoir une évaluation gratuite de vos besoins
                en gestion ou en entretien ? <br />
                Cliquez ici pour demander une soumission.
              </p>
            </div>
          </div>
          <Image
            src="/chez-sica.png"
            alt="Home Image"
            width={625}
            height={504}
            className="w-full max-h-[504px]"
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
    </div>
  );
};

export default page;
