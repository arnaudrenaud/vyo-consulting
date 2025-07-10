/* eslint-disable @next/next/no-img-element */
import ButtonLink from "../ButtonLink";
// import { RichContent, RichContentValue } from "@/components/utils/RichContent";

const HeroSection = () =>
  //     {
  //   heroTitle,
  //   heroParagraph,
  // }: {
  //   heroTitle: RichContentValue;
  //   heroParagraph: RichContentValue;
  // }
  {
    return (
      <>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative mb-14">
          <div className="hero-text p-4 lg:order-1 order-2">
            {/* <RichContent value={heroTitle} /> */}
            <h1 className="text-6xl font-light mb-8">Notre ambition</h1>

            <p className="mb-6 max-w-[400px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
              {/* <RichContent value={heroParagraph} /> */}
              Nous guidons <span className="font-bold">
                avec réactivité
              </span>{" "}
              nos clients vers la voie d’une transformation digitale réussie en
              leur offrant une expertise éclairée, des solutions concrètes et un
              accompagnement humain basé sur la confiance.
            </p>

            <ButtonLink href="/solutions" text="Discutons de votre besoin" />
          </div>
          <div className="relative lg:order-2 order-1 flex items-center max-lg:mt-6">
            <img
              src="/hero-img-about.png"
              alt="About home section"
              className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
            />
            <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] right-[-40px] -top-8 rounded-full" />
          </div>
          {/* <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] -bottom-[11rem] -left-[9rem] rounded-full" /> */}
        </section>
        <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
      </>
    );
  };
export default HeroSection;
