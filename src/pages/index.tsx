// import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import {
  ALL_EXPERTISES_QUERY,
  HOMEPAGE_QUERY,
  METADATA_QUERY,
} from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
  HOMEPAGE_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import BannerNumber from "@/components/BannerNumber";
import SolutionsSection from "@/components/SolutionsSection";
import Process from "@/components/Process";
import ChoiceSection from "@/components/ChoiceSection";
import Projects from "@/components/Projects";
// import { TITLE } from "@/helpers/constants";

export async function getStaticProps() {
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);
  const metadata = await client.fetch(METADATA_QUERY);
  const content = await client.fetch(HOMEPAGE_QUERY);
  return {
    props: { expertises, metadata, content },
  };
}

export default function Home({
  content,
  expertises,
  metadata,
}: {
  content: HOMEPAGE_QUERYResult;
  expertises: ALL_EXPERTISES_QUERYResult;
  metadata: METADATA_QUERYResult;
}) {
  if (!metadata) {
    throw new Error("Metadata is undefined");
  }
  if (!content) {
    throw new Error("Homepage content undefined.");
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          property="og:title"
          content={metadata.description || ""}
          key="title"
        />
      </Head>

      <HeroSection
        heroTitle={content.heroTitle}
        heroParagraph={content.heroParagraph}
      />
      <BannerNumber />
      <SolutionsSection expertises={expertises} />
      <Process />
      <ChoiceSection />
      <Projects />
    </>
  );
}
