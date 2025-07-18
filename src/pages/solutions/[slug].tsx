import { GetStaticPaths } from "next";
import { client } from "@/sanity/lib/client";
import {
  ALL_EXPERTISES_QUERY,
  ALL_PROJECTS_QUERY,
  EXPERTISE_DETAILS_QUERY,
} from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
  ALL_PROJECTS_QUERYResult,
  EXPERTISE_DETAILS_QUERYResult,
} from "@/sanity/types";
import SolutionsHeroSection from "@/components/solutions/SolutionsHeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import Projects from "@/components/Projects";
import Professions from "@/components/solutions/Professions";
import { urlFor } from "@/sanity/lib/image";
import CoSquad from "@/components/solutions/CoSquad";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export const getStaticPaths: GetStaticPaths = async () => {
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);

  return {
    paths: expertises.map((item: ALL_EXPERTISES_QUERYResult[number]) => ({
      params: { slug: item.slug.current },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const solution = await client.fetch(EXPERTISE_DETAILS_QUERY, {
    slug,
  });
  const projects = await client.fetch(ALL_PROJECTS_QUERY);

  return {
    props: {
      ...(await getPageLayoutData()),
      solution,
      projects,
    },
  };
};

export default function SolutionPage({
  expertises,
  solution,
  projects,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
  solution: EXPERTISE_DETAILS_QUERYResult;
  projects: ALL_PROJECTS_QUERYResult;
}) {
  if (!solution) {
    throw new Error("Solution is undefined.");
  }
  const logoUrl = solution.logo ? urlFor(solution.logo).url() : "";
  const coverPictureUrl = solution.coverPicture
    ? solution.logo
      ? urlFor(solution.coverPicture).url()
      : ""
    : undefined;

  // const projectsForSolution = projects.some((project) =>
  //   project.expertises.map((expertise) => expertise._id).includes(solution._id),
  // );

  return (
    <>
      <SolutionsHeroSection
        logoUrl={logoUrl}
        name={solution.name}
        heroParagraph={solution.longDescription}
        coverPicture={coverPictureUrl}
      />
      {solution.slug.current === "squad" ? (
        <CoSquad />
      ) : (
        solution.jobs &&
        solution.jobs.length && <Professions solution={solution} />
      )}
      <SolutionsSection expertises={expertises} showDescription={false} />
      <Projects projects={projects} />
      {/* en attente de dynamisation pour avoir les autres projets */}
      {/* {projectsForSolution && <Projects projects={projects} />} */}
    </>
  );
}
