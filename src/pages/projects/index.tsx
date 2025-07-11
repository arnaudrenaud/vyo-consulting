import { client } from "@/sanity/lib/client";
import {
  ALL_EXPERTISES_QUERY,
  ALL_PROJECTS_QUERY,
  METADATA_QUERY,
} from "@/sanity/lib/queries";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";

export async function getStaticProps() {
  const metadata = await client.fetch(METADATA_QUERY);
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);

  const projects = await client.fetch(ALL_PROJECTS_QUERY);

  return {
    props: { metadata, expertises, projects },
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
