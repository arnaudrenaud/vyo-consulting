import HeroSection from "@/components/about/HeroSection";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Approach from "@/components/about/Approach";
import DigitalJourney from "@/components/about/DigitalJourney";
import BannerNumber from "@/components/about/BannerNumber";
import Contact from "@/components/about/Contact";

import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { ABOUT_PAGE_QUERYResult } from "@/sanity/types";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export async function getStaticProps() {
  const content = await client.fetch(ABOUT_PAGE_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content },
  };
}

const About = ({ content }: { content: ABOUT_PAGE_QUERYResult }) => {
  if (!content) {
    throw new Error("About page content undefined.");
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection
        heroTitle={content.heroTitle}
        heroParagraph={content.heroParagraph}
      />
      <History />
      <Values />
      <Approach />
      <DigitalJourney />
      <BannerNumber />
      <Contact />
    </section>
  );
};

export default About;
