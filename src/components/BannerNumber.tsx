/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonLink from "./ButtonLink";

const BannerNumber = () => {
  return (
    <>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

      <ul className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_1fr_1.2fr] text-center mt-4 gap-4">
        <li className="col-span-1 lg:col-span-1 flex justify-center items-center lg:border-r lg:border-[#c9cdd2] text-4xl max-lg:mb-12">
          <div className="relative">
            Chiffres
            <img src="/underline.png" alt="underline" className="absolute" />
          </div>
        </li>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:contents gap-4">
          <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1">
            <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img
                src="/icones/partypopper.png"
                alt="partypopper"
                className="w-6 h-6"
              />
            </div>
            <p className="text-3xl my-2">2024</p>
            <p className="text-sm">Création de la société</p>
          </li>

          <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1">
            <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img
                src="/icones/banknote.png"
                alt="banknote"
                className="w-6 h-6"
              />
            </div>
            <p className="text-3xl my-2">100%</p>
            <p className="text-sm">Autofinancé</p>
          </li>

          <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1">
            <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img src="/icones/award.png" alt="award" className="w-6 h-6" />
            </div>
            <p className="text-3xl my-2">20 ans</p>
            <p className="text-sm">D&apos;expérience</p>
          </li>

          <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1">
            <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img
                src="/icones/green-folder.png"
                alt="green-folder"
                className="w-6 h-6"
              />
            </div>
            <p className="text-3xl my-2">+ de 20</p>
            <p className="text-sm">Projets réalisés</p>
          </li>

          <li className="lg:col-span-1">
            <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img
                src="/icones/handshake.png"
                alt="handshake"
                className="w-6 h-6"
              />
            </div>
            <p className="text-3xl my-2">+ de 5</p>
            <p className="text-sm">Clients Grand Compte</p>
          </li>
        </div>
      </ul>

      <div className="md:h-[60rem] w-full relative">
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] -top-8 -left-12 rounded-full" />
        <div className="flex justify-center items-center mt-12 bg-[url('/banner-number.png')] p-4 rounded-lg bg-no-repeat bg-cover h-full w-full">
          {/* Card */}
          {/* px-16 */}
          <div className="bg-white rounded-lg flex flex-col justify-center gap-4 text-justify md:max-w-[725px] pt-16 pb-16 max-md:px-8 px-16">
            <div className="flex items-center justify-center mr-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
              <img
                src="/icones/medal.png"
                alt="medal"
                className="w-6 h-6 m-auto"
              />
            </div>
            <h2 className="text-2xl md:text-5xl mb-3">
              <span className="font-light">Tracer la voie d&apos;une</span>
              <br />
              <span className="font-bold">
                transformation digitale <br />
                <div className="relative">
                  réussie.
                  <img
                    src="/underline.png"
                    alt="underline"
                    className="absolute w-[176px] max-md:w-[90px]"
                  />
                </div>
              </span>
            </h2>
            <p className="max-sm:text-sm">
              VYO Consulting est{" "}
              <span className="font-bold">
                un cabinet de conseil en transformation digitale{" "}
              </span>
              qui accompagne les entreprises à chaque étape de leur évolution,
              de la définition des besoins métiers à la mise en œuvre technique.
            </p>
            <p className="max-sm:text-sm">
              Porté par des valeurs d’éthique, d’humanisme et de pragmatisme,
              VYO Consulting se positionne comme un véritable « poisson pilote
              », guidant ses clients vers l’innovation et la performance. Sans
              jamais se substituer à leur savoir-faire, VYO Consulting
              accompagne leur transformation grâce à une approche structurée,{" "}
              <span className="font-bold">
                alliant méthodologie Agile et expertise technologique.
              </span>
            </p>
            <p className="max-sm:text-sm">
              Grâce à une expertise approfondie en IT et en stratégie digitale,{" "}
              <span className="font-bold">
                nous co-construisons des solutions adaptées, scalables et
                durables.
              </span>
            </p>
            <p className="max-sm:text-sm">
              Notre mission :{" "}
              <span className="font-bold">
                conseiller, guider et accompagner nos clients avec excellence et
                humilité pour garantir leur succès numérique.
              </span>
            </p>

            <ButtonLink
              href="/solutions/squad"
              text="Découvrir VYO Consulting"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerNumber;
