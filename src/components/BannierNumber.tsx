/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BannierNumber = () => {
  return (
    <>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
      <ul className="grid grid-cols-3 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_1fr_1.2fr] justify-center text-center mt-4">
        <li className="flex justify-center items-center border-r border-[#c9cdd2] text-4xl order-1 lg:order-none lg:col-span-1">
          <div className="relative">
            Chiffres
            <img src="/underline.png" alt="" className="absolute" />
          </div>
        </li>
        <li className="border-r border-[#c9cdd2] order-2 lg:order-none">
          <div className="flex items-center justify-center m-auto w-20 h-20 rounded-full border border-black">
            <img src="/icones/partypopper.png" alt="" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">2024</p>
          <p className="text-sm">Création de la société</p>
        </li>
        <li className="border-r border-[#c9cdd2] order-3 lg:order-none">
          <div className="flex items-center justify-center m-auto w-20 h-20 rounded-full border border-black">
            <img src="/icones/banknote.png" alt="" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">100%</p>
          <p className="text-sm">Autofinancé</p>
        </li>
        <li className="border-r border-[#c9cdd2] order-4 lg:order-none">
          <div className="flex items-center justify-center m-auto w-20 h-20 rounded-full border border-black">
            <img src="/icones/folder-open.png" alt="" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">20 ans</p>
          <p className="text-sm">D&apos;expérience</p>
        </li>
        <li className="border-r border-[#c9cdd2] order-5 lg:order-none">
          <div className="flex items-center justify-center m-auto w-20 h-20 rounded-full border border-black">
            <img src="/icones/handshake.png" alt="" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">+ de 20</p>
          <p className="text-sm">Projets réalisés</p>
        </li>
        <li>
          <div className="flex items-center justify-center m-auto w-20 h-20 rounded-full border border-black">
            <img src="/icones/award.png" alt="" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">+ de 5</p>
          <p className="text-sm">Clients Grand Compte</p>
        </li>
      </ul>

      <div className="h-[60rem] w-full relative mt-8">
        <div className="absolute text-[#BBF7D0] h-[174px] w-[174px] block z-50 -top-8 -left-12" />
        <div className="flex justify-center items-center mt-12 bg-[url('/bannier-number.png')] p-4 rounded-lg bg-no-repeat bg-cover h-full w-full">
          {/* Card */}

          <div className="bg-white rounded-lg flex flex-col justify-center gap-4 max-w-[725px] px-16 pt-16 pb-16">
            <div className="flex items-center justify-center mr-auto w-20 h-20 rounded-full border border-black">
              <img src="/icones/medal.png" alt="" className="w-6 h-6 m-auto" />
            </div>
            <h2 className="text-5xl mb-3">
              <span className="font-light">Tracer la voie d&apos;une</span>
              <br />
              <span className="font-bold">
                transformation digitale <br />
                <div className="relative">
                  réussie.
                  <img
                    src="/underline.png"
                    alt=""
                    className="absolute w-[176px]"
                  />
                </div>
              </span>
            </h2>
            <p>
              VYO Consulting est{" "}
              <span className="font-bold">
                un cabinet de conseil en transformation digitale{" "}
              </span>
              qui accompagne les entreprises à chaque étape de leur évolution,
              de la définition des besoins métiers à la mise en œuvre technique.
            </p>
            <p>
              Porté par des valeurs d’éthique, d’humanisme et de pragmatisme,
              VYO Consulting se positionne comme un véritable « poisson pilote
              », guidant ses clients vers l’innovation et la performance. Sans
              jamais se substituer à leur savoir-faire, VYO Consulting
              accompagne leur transformation grâce à une approche structurée,{" "}
              <span className="font-bold">
                alliant méthodologie Agile et expertise technologique.
              </span>
            </p>
            <p>
              Grâce à une expertise approfondie en IT et en stratégie digitale,{" "}
              <span className="font-bold">
                nous co-construisons des solutions adaptées, scalables et
                durables.
              </span>
            </p>
            <p>
              Notre mission :{" "}
              <span className="font-bold">
                conseiller, guider et accompagner nos clients avec excellence et
                humilité pour garantir leur succès numérique.
              </span>
            </p>

            <Link
              href="/solutions"
              className="flex pl-0 items-center rounded-[20px] py-1 pr-3 border border-black w-fit font-bold"
            >
              <img
                src="/icones/green-dot.png"
                alt="green dot"
                className="w-8"
              />
              Découvrir VYO Consulting{" "}
              <img
                src="/icones/arrow-right.png"
                alt="arrow right"
                className="w-3 ml-3"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannierNumber;
