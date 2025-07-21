import HeroSection from "@/components/about/HeroSection";
import History from "@/components/about/History";
import Values from "@/components/about/Values";
import Approach from "@/components/about/Approach";
import DigitalJourney from "@/components/about/DigitalJourney";
import BannerNumber from "@/components/about/BannerNumber";
import Contact from "@/components/about/Contact";

import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { ABOUT_PAGE_QUERYResult, METADATA_QUERYResult } from "@/sanity/types";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import Head from "next/head";

export async function getStaticProps() {
  const content = await client.fetch(ABOUT_PAGE_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content },
  };
}

const About = ({
  content,
  metadata,
}: {
  content: ABOUT_PAGE_QUERYResult;
  metadata: METADATA_QUERYResult;
}) => {
  if (!metadata) {
    throw new Error("Metadata is undefined.");
  }
  if (!content) {
    throw new Error("About page content undefined.");
  }

  return (
    <>
      <Head>
        <title>{content.metaTitle || metadata.title}</title>
        <meta
          property="og:title"
          content={content.metaDescription || metadata.description || ""}
          key="title"
        />
      </Head>

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
        <div className="h-[1px] w-full bg-[#c9cdd2] my-10"></div>
      </section>
    </>
  );
};

export default About;
