import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";

export async function getStaticProps() {
  const projects = await client.fetch(ALL_PROJECTS_QUERY);

  return {
    props: { ...(await getPageLayoutData()), projects },
  };
}

export default function ProjectsIndexPage({
  projects,
}: {
  projects: ALL_PROJECTS_QUERYResult;
}) {
  return projects.map((project) => (
    <span key={project._id}>{project.shortTitle}</span>
  ));
}
