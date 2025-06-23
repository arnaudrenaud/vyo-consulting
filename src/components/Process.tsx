/* eslint-disable @next/next/no-img-element */
import ButtonLink from "./ButtonLink";

const Processus = () => {
  return (
    <section className="mt-6 mb-12">
      <div className="text-center">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl max-md:text-3xl">
            Besoin d&apos;un talent ou d&apos;une équipe?
          </h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-[#737373]">
        VYO Consulting vous accompagne de façon Agile pour
        <br />{" "}
        <span className="font-bold">
          une intervention globale clef en main.
        </span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-0 lg:mt-12 items-center">
        <img
          src="/icones/schema.png"
          alt="Processus schema processus"
          className="max-sm:max-w-[60%] sm:max-w-[345px] max-lg:m-auto max-lg:py-8 max-sm:pb-0! lg:ml-auto"
        />
        <div className="max-lg:m-auto">
          <div className="p-4 gap-4 items-end flex">
            <div className="flex items-center justify-center w-20 h-20 max-md:w-14 max-[330px]:w-24! max-md:h-14 rounded-full border border-[#4ADE80]">
              <div className="max-sm:text-xl sm:text-3xl">01</div>
            </div>
            <div className="flex flex-col">
              <img
                src="/icones/puzzle.png"
                alt="puzzle image"
                className="w-6 h-6"
              />
              <h4 className="text-sm font-bold">INCEPTION</h4>
              <ul className="text-sm leading-normal">
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Analyse des besoins et objectif.
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Sélection des talents ou constitution de l’équipe.
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Alignement méthodologique et planification.
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-auto bg-[#CBD5E1] max-w-[430px] ml-5"></div>

          <div className="p-4 gap-4 items-end flex">
            <div className="flex items-center justify-center w-20 h-20 max-md:w-14 max-[330px]:w-24! max-md:h-14 rounded-full border border-[#4ADE80]">
              <div className="max-sm:text-xl sm:text-3xl">02</div>
            </div>
            <div className="flex flex-col">
              <img
                src="/icones/laptop-minimal.png"
                alt="laptop minimal image"
                className="w-6 h-6"
              />
              <h4 className="text-sm font-bold">BUILD</h4>
              <ul className="text-sm leading-normal">
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Mise en place technique et cadE80rage (Sprint 0)..
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Développement du MVP en mode agile.
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Priorisation et itérations continues.
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[1px] w-auto bg-[#CBD5E1] max-w-[430px] ml-5"></div>

          <div className="p-4 gap-4 items-end flex">
            <div className="flex items-center justify-center w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-[#4ADE80]">
              <div className="max-sm:text-xl sm:text-3xl">03</div>
            </div>
            <div className="flex flex-col">
              <img
                src="/icones/infinity.png"
                alt="infinity image"
                className="w-6 h-6"
              />
              <h4 className="text-sm font-bold">Run</h4>
              <ul className="text-sm leading-normal">
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Déploiement et stabilisation.
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Amélioration continue.
                </li>
                <li className="list-disc marker:text-[#22C55E] ml-4">
                  Support et évolutivité.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center text-sm">
        <ButtonLink href="/solutions" text="Trouver votre solution" />
      </div>
    </section>
  );
};

export default Processus;
