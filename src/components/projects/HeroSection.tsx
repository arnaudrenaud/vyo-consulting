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
      <section className="relative mb-4">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-light">
            <RichContent value={heroTitle} />
          </h1>
          <p className="mb-4 max-w-[410px] max-lg:max-w-full max-lg:text-justify max-lg:mt-8">
            <RichContent value={heroParagraph} />
          </p>
        </div>
        <div className="absolute bg-[#BBF7D0] h-[449px] w-[449px] block z-[-1] top-0 right-[1rem] rounded-full" />
      </section>
    </>
  );
};

export default HeroSection;
