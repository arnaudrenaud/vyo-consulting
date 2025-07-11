import { GetStaticPaths } from "next";
import { client } from "@/sanity/lib/client";
import {
  ALL_EXPERTISES_QUERY,
  EXPERTISE_DETAILS_QUERY,
} from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
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
    paths: expertises.map((item) => ({
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

  return {
    props: {
      ...(await getPageLayoutData()),
      solution,
    },
  };
};

export default function SolutionPage({
  expertises,
  solution,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
  solution: EXPERTISE_DETAILS_QUERYResult;
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
      <Projects />
      <SolutionsSection expertises={expertises} showDescription={false} />
    </>
  );
}
