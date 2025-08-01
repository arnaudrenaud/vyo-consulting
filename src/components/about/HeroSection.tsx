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
        <div className="p-4 lg:order-1 order-2 content-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-light">
            <RichContent value={heroTitle} />
          </h1>

          <p className="mb-4 max-w-[410px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
            <RichContent value={heroParagraph} />
          </p>

          <ButtonLink href="/contact" text="Discutons de votre besoin" />
        </div>
        <div className="relative lg:order-2 order-1 flex items-center max-lg:mt-6">
          <img
            src="/solution-hero-img.jpg"
            alt="Image home section"
            className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
          />

          <div className="absolute bg-[#BBF7D0] md:h-[86px] md:w-[86px] h-[60px] w-[60px] block z-[-1] md:-right-[3rem] -right-[1rem] -top-[1.5rem] rounded-full" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
