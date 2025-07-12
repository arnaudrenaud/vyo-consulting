/* eslint-disable @next/next/no-img-element */
import ButtonLink from "./ButtonLink";

const ChoiceSection = () => {
  return (
    <>
      <div className="md:h-[60rem] w-full relative">
        <div className="absolute bg-[#BBF7D0] h-[308px] w-[308px] block z-[-1] -top-8 -left-48 rounded-full" />
        <div className="flex justify-center items-center mt-12 bg-[url('/bckg-choice.png')] p-4 rounded-lg bg-no-repeat bg-cover h-full w-full">
          {/* Card */}
          {/* max-md:px-8 */}
          <div className="bg-white rounded-lg flex flex-col justify-center gap-4 md:max-w-[725px] max-md:w-full px-4 sm:px-8 md:px-16 pt-16 pb-16">
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <h2 className="font-light text-5xl max-sm:text-3xl">
                  Pourquoi nous choisir ?
                </h2>
                <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
                  <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
                  <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
                </div>
              </div>
            </div>

            <div className="text-sm md:mx-[2.2rem] max-md:mx-auto mt-8">
              <p className="relative bg-[url('/icones/bckg-rectangle-left.png')] bg-no-repeat bg-contain p-4 pl-12 rounded-lg leading-4 h-[4.5rem]">
                <span className="font-semibold">Un accompagnement complet</span>
                <br /> en transformation digitale
                <span className="flex items-center justify-center absolute -top-10 left-[-35px] max-sm:-left-[10px] max-sm:-top-6 w-16 h-16 max-sm:w-10! max-sm:h-10! max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                  <img
                    src="/icones/footprints.png"
                    alt="footprints"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
                <span className="flex items-center justify-center absolute right-[68px] top-8 z-50 max-md:hidden">
                  <img
                    src="/icones/vector-link-right.png"
                    alt="vector-link-right"
                    className="w-24 h-[5.575rem]"
                  />
                </span>
              </p>
              <div className="flex flex-col items-center relative z-50 max-md:-mt-[6.5px] md:hidden">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <div className="w-[2px] bg-[#16A34A] h-20"></div>
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
              </div>
            </div>

            <div className="text-sm ml-auto mr-[2.2rem] max-md:mx-auto max-md:-mt-[1.4rem] md:mt-8">
              <p className="relative bg-[url('/icones/bckg-rectangle-right.png')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit">
                Un environnement{" "}
                <span className="font-semibold">
                  humain,
                  <br /> éthique et pragmatique
                </span>
                <span className="flex items-center justify-center absolute -top-10 right-[-40px] max-sm:-right-[10px] max-sm:-top-6 w-16 h-16 max-md:w-14 max-md:h-14 max-sm:w-10! max-sm:h-10! rounded-full border border-[#16A34A]">
                  <img
                    src="/icones/circle-user.png"
                    alt="circle-user"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
                <span className="flex items-center justify-center absolute left-[-59px] top-[1.6rem] z-50 max-md:hidden">
                  <img
                    src="/icones/vector-link-left.png"
                    alt="vector-link-left"
                    className="w-16 h-[6.2rem]"
                  />
                </span>
              </p>
              <div className="flex flex-col items-center relative z-50 max-md:-mt-[6.5px] md:hidden">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <div className="w-[2px] bg-[#16A34A] h-20"></div>
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
              </div>
            </div>

            <div className="text-sm md:mx-[2.2rem] max-md:mx-auto max-md:-mt-[1.4rem] md:mt-8">
              <p className="relative bg-[url('/icones/bckg-rectangle-left.png')] bg-no-repeat bg-contain p-4 pl-10 pb-4 rounded-lg leading-4 h-[4.5rem]">
                Une expertise en{" "}
                <span className="font-semibold">
                  stratégie digitale
                  <br /> et nouvelles technologies
                </span>
                <span className="flex items-center justify-center absolute -top-10 left-[-35px] max-sm:-left-[10px] max-sm:-top-6 max-sm:w-10! max-sm:h-10! w-16 h-16 max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                  <img
                    src="/icones/circuit-board.png"
                    alt="circuit-board"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
                <span className="flex items-center justify-center absolute right-[68px] top-8 z-50 max-md:hidden">
                  <img
                    src="/icones/vector-link-right.png"
                    alt="vector-link-right"
                    className="w-24 h-[5.575rem]"
                  />
                </span>
              </p>
              <div className="flex flex-col items-center relative z-50 max-md:-mt-[6.5px] md:hidden">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <div className="w-[2px] bg-[#16A34A] h-20"></div>
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
              </div>
            </div>

            <div className="text-sm md:mx-[2.2rem] max-md:mx-auto max-md:-mt-[1.4rem] md:mt-8">
              <p className="relative bg-[url('/icones/bckg-rectangle-right.png')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit ml-auto">
                Une approche <br />
                <span className="font-semibold">
                  collective et collaborative
                </span>
                <span className="flex items-center justify-center absolute -top-10 right-[-40px] max-sm:-right-[10px] max-sm:-top-6 w-16 h-16 max-md:w-14 max-md:h-14 max-sm:w-10! max-sm:h-10! rounded-full border border-[#16A34A]">
                  <img
                    src="/icones/hand-helping.png"
                    alt="hand-helping"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
                <span className="flex items-center justify-center absolute left-[-59px] top-[1.6rem] z-50 max-md:hidden">
                  <img
                    src="/icones/vector-link-left.png"
                    alt="vector-link-left"
                    className="w-16 h-[6.2rem]"
                  />
                </span>
              </p>
              <div className="flex flex-col items-center relative z-50 max-md:-mt-[6.5px] md:hidden">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <div className="w-[2px] bg-[#16A34A] h-20"></div>
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
              </div>
            </div>

            <div className="text-sm md:mx-[2.2rem] max-md:mx-auto max-md:-mt-[1.4rem] md:mt-8">
              <p className="relative bg-[url('/icones/bckg-rectangle-left.png')] bg-no-repeat bg-contain p-4 pl-14 rounded-lg leading-4 h-[4.5rem]">
                Un cabinet{" "}
                <span className="font-semibold">
                  indépendant
                  <br /> et flexible
                </span>
                <span className="flex items-center justify-center absolute -top-10 left-[-35px] max-sm:-left-[10px] max-sm:-top-6 w-16 h-16 max-md:w-14 max-md:h-14 max-sm:w-10! max-sm:h-10! rounded-full border border-[#16A34A]">
                  <img
                    src="/icones/biceps.png"
                    alt="biceps"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
              </p>
            </div>
            <div className="m-auto pt-8">
              <ButtonLink href="/solutions" text="Découvrir VYO Consulting" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChoiceSection;
