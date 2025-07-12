/* eslint-disable @next/next/no-img-element */
import { RichContent, RichContentValue } from "@/components/utils/RichContent";
import ButtonLink from "../ButtonLink";

const HeroSection = ({
  heroTitle,
  heroParagraph,
}: {
  heroTitle: RichContentValue;
  heroParagraph: RichContentValue;
}) => {
  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative mb-14">
        <div className="hero-text p-4 lg:order-1 order-2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-light">
            <RichContent value={heroTitle} />
          </h1>

          <p className="mb-4 max-w-[400px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
            <RichContent value={heroParagraph} />
          </p>

          <ButtonLink href="/solutions" text="Discutons de votre besoin" />
        </div>
        <div className="relative lg:order-2 order-1 flex items-center max-lg:mt-6">
          <img
            src="/solution-hero-img.png"
            alt="Image home section"
            className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
          />
          <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] -left-[40px] top-[40px] rounded-full" />
        </div>
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] -bottom-[11rem] -left-[9rem] rounded-full" />
      </section>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};

export default HeroSection;
