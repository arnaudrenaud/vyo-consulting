/* eslint-disable @next/next/no-img-element */
import ButtonLink from "../ButtonLink";

const CoSquad = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-6">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">
              Co-construisons une équipe adaptée à votre besoin
            </h2>

            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-4 mt-[85px] xl:max-w-[1200px] xl:mx-auto max-md:gap-y-12">
            <div className="relative text-left bg-white border-1 border-b-accent shadow-[#DC2626] rounded-2xl shadow-[3px_3px] flex flex-col gap-4 md:max-w-[725px] px-6 py-10 mx-auto w-full">
              <div className="absolute top-[-33px] left-[-25px] max-md:left-1/2 max-md:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#DC2626]">
                <img
                  src="/icones/users-round.svg"
                  alt="users round icon"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                Votre besoin de transformation digitale : une équipe dédiée
              </h3>
              <ul className="list-disc pl-8">
                <li>
                  Une <span className="font-bold">Task Force sur mesure</span>{" "}
                  mobilisée selon vos objectifs et votre budget
                </li>
                <li>
                  Une coordination fluide entre les expertises techniques,
                  métier et stratégiques
                </li>
                <li>
                  Un accompagnement complet : de la conception à la réalisation
                  (cadrage, build, run)
                </li>
              </ul>
            </div>

            <div className="relative text-left bg-white border-1 border-b-accent shadow-[#DC2626] rounded-2xl shadow-[3px_3px] flex flex-col gap-4 md:max-w-[725px] px-6 py-10 mx-auto w-full">
              <div className="absolute top-[-33px] left-[-25px] max-md:left-1/2 max-md:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#DC2626]">
                <img
                  src="/icones/trello.svg"
                  alt="trello icon"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                Notre engagement : co-piloter avec vous
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Des consultants expérimentés et alignés avec votre culture
                </li>
                <li>
                  Un <span className="font-bold">delivery agile</span>, rythmé
                  et piloté par des indicateurs de valeur et de performance
                </li>
                {/* <li>
                  Une capacité à augmenter ou à baisser la charge des équipes en
                  fonction des priorités du projet et des budgets associés (en
                  mode capacitaire)
                </li> */}
              </ul>
            </div>

            <div className="relative text-left bg-white border-1 border-b-accent shadow-[#DC2626] rounded-2xl shadow-[3px_3px] flex flex-col gap-4 md:max-w-[725px] px-6 py-10 mx-auto w-full">
              <div className="absolute top-[-33px] left-[-25px] max-md:left-1/2 max-md:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#DC2626]">
                <img
                  src="/icones/hands.svg"
                  alt="hands icon"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                Votre besoin de transformation digitale : une équipe dédiée
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  Une <span className="font-bold">Task Force sur mesure</span>{" "}
                  mobilisée selon vos objectifs et votre budget
                </li>
                <li>
                  Une coordination fluide entre les expertises techniques,
                  métier et stratégiques
                </li>
                <li>
                  Un accompagnement complet : de la conception à la réalisation
                  (cadrage, build, run)
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="absolute bg-[#DCFCE7] h-[228px] w-[228px] block z-[-1] top-0 right-0 rounded-full" /> */}
        {/* <img
          src="/icones/elipse-cosquad.svg"
          alt="ellipse"
          className="absolute top-0 right-0"
        /> */}
      </div>

      <div className="mb-8 mx-auto">
        <ButtonLink href="/contact" text="Construisons votre équipe" />
      </div>

      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};
export default CoSquad;
