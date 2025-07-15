/* eslint-disable @next/next/no-img-element */
import ButtonLink from "../ButtonLink";
import { RichContent, RichContentValue } from "@/components/utils/RichContent";

const SolutionsHeroSection = ({
  logoUrl,
  name,
  heroParagraph,
  coverPicture = "/solution-hero-img.png",
}: {
  logoUrl: string;
  name: string;
  heroParagraph: RichContentValue;
  coverPicture?: string;
}) => {
  return (
    <>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative mb-14">
        <div className="hero-text p-4 lg:order-1 order-2">
          <img
            src={logoUrl}
            alt={`Logo de vyo.${name}`}
            className="my-4 h-[37px]"
          />

          <p className="max-w-[80%] max-lg:max-w-full max-lg:text-justify max-lg:mt-8 mb-[55px]">
            <RichContent value={heroParagraph} />
          </p>

          <ButtonLink href="/contact" text="Discutons de votre besoin" />
        </div>
        <div className="relative lg:order-2 order-1 flex items-center max-lg:mt-6">
          <img
            src={coverPicture}
            alt={`Cover picture for solution ${name}`}
            className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
          />
          <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] -left-[70px] top-[40px] rounded-full" />
        </div>
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] -bottom-[11rem] -left-[9rem] rounded-full" />
      </section>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};
export default SolutionsHeroSection;
