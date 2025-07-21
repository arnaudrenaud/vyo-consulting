import Projects from "@/components/projects/Projects";
import HeroSection from "@/components/projects/HeroSection";
import ModalProject from "@/components/projects/ModalProject";
import Contact from "@/components/about/Contact";

import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY, PROJECTS_PAGE_QUERY } from "@/sanity/lib/queries";
import {
  ALL_PROJECTS_QUERYResult,
  PROJECTS_PAGE_QUERYResult,
} from "@/sanity/types";

export async function getStaticProps() {
  const content = await client.fetch(PROJECTS_PAGE_QUERY);
  const projects = await client.fetch(ALL_PROJECTS_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content, projects },
  };
}

export default function ProjectsIndexPage({
  content,
  projects,
}: {
  content: PROJECTS_PAGE_QUERYResult;
  projects: ALL_PROJECTS_QUERYResult;
}) {
  if (!content) {
    throw new Error("Projects page content undefined.");
  }

  return (
    <>
      <HeroSection
        heroTitle={content.heroTitle}
        heroParagraph={content.heroParagraph}
      />
      <Projects projects={projects} />
      <Contact />
      <ModalProject projects={projects} />
    </>
  );
}
