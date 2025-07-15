/* eslint-disable @next/next/no-img-element */
import ButtonLink from "./ButtonLink";
import { RichContent, RichContentValue } from "@/components/utils/RichContent";

const HeroSection = ({
  heroTitle,
  heroParagraph,
}: {
  heroTitle: RichContentValue;
  heroParagraph: RichContentValue;
}) => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="p-4 lg:order-1 order-2 content-center">
        <h1 className="text-3xl md:text-5xl lg:text-[50px] mb-4 font-light 2xl:max-w-[535px]">
          <RichContent value={heroTitle} />
        </h1>

        <p className="mb-4 max-w-[370px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
          <RichContent value={heroParagraph} />
        </p>

        <ButtonLink href="/solutions" text="Nos solutions sur mesure" />
      </div>
      <div className="relative lg:order-2 order-1 flex items-center max-lg:mt-6">
        <img
          src="/hero-img.jpg"
          alt="Image home section"
          className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
        />
        <div className="absolute bg-[#DCFCE7] h-[228px] w-[228px] block z-[-1] -bottom-4 -left-[7.75rem] rounded-full" />
        <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] -top-4 right-0 md:-top-6 md:-right-11 rounded-full" />
      </div>
    </section>
  );
};
export default HeroSection;
