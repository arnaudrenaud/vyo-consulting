/* eslint-disable @next/next/no-img-element */
import ButtonLink from "../ButtonLink";
import { RichContent, RichContentValue } from "@/components/utils/RichContent";

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
          {/* <RichContent value={heroTitle} /> */}
          <img
            src="/logo-vyo-design.svg"
            alt="logo vyo design"
            className="my-4"
          />

          <p className="mb-4 max-w-[400px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
            {/* <RichContent value={heroParagraph} /> */}
            Le Design chez <span className="font-bold">VYO Consulting</span> est
            une démarche intégrée dans chaque projet de transformation. Nous
            mettons l’accent sur{" "}
            <span className="font-bold">
              une expérience utilisateur intuitive, en alliant créativité et
              innovation.
            </span>{" "}
            Nos équipes de designers collaborent étroitement avec les équipes
            métiers pour créer des interfaces qui répondent aux besoins réels
            des utilisateurs tout en respectant vos exigences fonctionnelles.
            <span className="font-bold">
              Nous veillons à ce que chaque produit soit à la fois performant et
              agréable à utiliser.
            </span>
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
