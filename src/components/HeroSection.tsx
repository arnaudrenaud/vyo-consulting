/* eslint-disable @next/next/no-img-element */
import { HOMEPAGE_QUERYResult } from "@/sanity/types";
import ButtonLink from "./ButtonLink";
import { RichContent } from "@/components/utils/RichContent";

const HeroSection = ({ content }: { content: HOMEPAGE_QUERYResult }) => {
  if (!content) {
    throw new Error("Homepage content is undefined");
  }

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
      <div className="hero-text p-4 lg:order-1 order-2">
        <h1 className="text-6xl mb-4 max-lg:text-5xl max-lg:mt-4">
          <RichContent value={content.heroTitle} />
        </h1>

        <p className="mb-4 max-w-3/5 max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
          <RichContent value={content.heroParagraph} />
        </p>

        <ButtonLink href="/solutions" text="Nos solutions sur mesure" />
      </div>
      <div className="lg:order-2 order-1 flex items-center">
        <img
          src="/hero-img.png"
          alt="Image home section"
          className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
        />
      </div>
    </section>
  );
};
export default HeroSection;
