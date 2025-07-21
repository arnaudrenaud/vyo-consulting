import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY, HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
  ALL_PROJECTS_QUERYResult,
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
import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export async function getStaticProps() {
  const content = await client.fetch(HOMEPAGE_QUERY);
  const projects = await client.fetch(ALL_PROJECTS_QUERY);
  return {
    props: { ...(await getPageLayoutData()), content, projects },
  };
}

export default function Home({
  metadata,
  expertises,
  content,
  projects,
}: {
  metadata: METADATA_QUERYResult;
  expertises: ALL_EXPERTISES_QUERYResult;
  content: HOMEPAGE_QUERYResult;
  projects: ALL_PROJECTS_QUERYResult;
}) {
  if (!metadata) {
    throw new Error("Metadata is undefined.");
  }
  if (!content) {
    throw new Error("Homepage content is undefined.");
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description || ""}
          key="title"
        />
      </Head>

      <HeroSection
        heroTitle={content.heroTitle}
        heroParagraph={content.heroParagraph}
      />
      <BannerNumber introduction={content.introduction} />
      <SolutionsSection expertises={expertises} showDescription />
      <Process introduction={content.process} />
      <ChoiceSection />
      <Projects projects={projects} />
    </>
  );
}
