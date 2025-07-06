/* eslint-disable @next/next/no-img-element */
import ButtonLink from "../ButtonLink";

const Professions = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <div className="text-center py-6">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl">Nos métiers design</h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-12 mt-24 justify-center sm:ml-[4.2rem]">
            <div className="text-sm max-sm:mx-auto">
              <p className="relative bg-[url('/professions-bckg.svg')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit">
                <span className="font-semibold">
                  UX designer
                  <br />
                  Junior . Senior
                </span>
                <span
                  className="flex items-center justify-center absolute -top-10 left-[-40px] max-sm:-left-[10px] max-sm:-top-6 w-[66px] h-[66px] max-md:w-14 max-md:h-14 
                max-sm:w-10! max-sm:h-10! rounded-full border border-[#C026D3]"
                >
                  <img
                    src="/icones/layout-panel-top.svg"
                    alt="circle-user"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
              </p>
            </div>
            <div className="text-sm max-sm:mx-auto">
              <p className="relative bg-[url('/professions-bckg.svg')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit">
                <span className="font-semibold">
                  UX designer
                  <br />
                  Junior . Senior
                </span>
                <span
                  className="flex items-center justify-center absolute -top-10 left-[-40px] max-sm:-left-[10px] max-sm:-top-6 w-[66px] h-[66px] max-md:w-14 max-md:h-14 
                max-sm:w-10! max-sm:h-10! rounded-full border border-[#C026D3]"
                >
                  <img
                    src="/icones/palette.svg"
                    alt="palette"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
              </p>
            </div>
            <div className="text-sm max-sm:mx-auto">
              <p className="relative bg-[url('/professions-bckg.svg')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit">
                <span className="font-semibold">
                  UX designer
                  <br />
                  Junior . Senior
                </span>
                <span
                  className="flex items-center justify-center absolute -top-10 left-[-40px] max-sm:-left-[10px] max-sm:-top-6 w-[66px] h-[66px] max-md:w-14 max-md:h-14 
                max-sm:w-10! max-sm:h-10! rounded-full border border-[#C026D3]"
                >
                  <img
                    src="/icones/drafting-compass.svg"
                    alt="drafting-compass"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
              </p>
            </div>
            <div className="text-sm max-sm:mx-auto">
              <p className="relative bg-[url('/professions-bckg.svg')] bg-no-repeat bg-contain py-4 pl-8 pr-16 rounded-lg w-fit">
                <span className="font-semibold">
                  UX designer
                  <br />
                  Junior . Senior
                </span>
                <span
                  className="flex items-center justify-center absolute -top-10 left-[-40px] max-sm:-left-[10px] max-sm:-top-6 w-[66px] h-[66px] max-md:w-14 max-md:h-14 
                max-sm:w-10! max-sm:h-10! rounded-full border border-[#C026D3]"
                >
                  <img
                    src="/icones/pencil-ruler.svg"
                    alt="pencil-ruler"
                    className="w-6 h-6 max-sm:w-4 max-sm:h-4"
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="absolute bg-[#DCFCE7] h-[228px] w-[228px] block z-[-1] rounded-full" /> */}
      </div>

      <div className="mb-20 mx-auto">
        <ButtonLink href="/solutions" text="Construisons votre équipe" />
      </div>

      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};
export default Professions;
