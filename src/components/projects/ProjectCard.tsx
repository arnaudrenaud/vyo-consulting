/* eslint-disable @next/next/no-img-element */

import { RichContent } from "@/components/utils/RichContent";
import { PATHS, SEARCH_PARAMS } from "@/helpers/constants";
import { getSolutionThemeColor } from "@/helpers/functions";
import { urlFor } from "@/sanity/lib/image";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import Link from "next/link";

export function ProjectCard({
  project,
}: {
  project: ALL_PROJECTS_QUERYResult[0];
}) {
  const projectUrl = `${PATHS.PROJECTS}?${SEARCH_PARAMS.PROJECT_ID}=${project.slug.current}`;
  const projectCoverImage =
    (project.realizationScreenshots &&
      project.realizationScreenshots.length &&
      urlFor(project.realizationScreenshots[0]).url()) ||
    "/icones/projets-1.png";

  return (
    <div
      className={`bg-white border-1 border-accent rounded-2xl shadow-[3px_3px] ${getSolutionThemeColor(project.expertises[0].slug).background} w-[95%]! ml-[10px]! px-4 py-8 max-md:px-8`}
    >
      <div className="relative">
        <img src={projectCoverImage} alt={`projet ${project.shortTitle}`} />
        <p className="absolute top-2.5 left-2.5 text-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white pl-4 rounded-2xl py-1">
          {project.expertises.map((expertise) => (
            <img
              key={expertise._id}
              src={urlFor(expertise.logo).url()}
              alt={`Logo vyo.${expertise.name}`}
              className="h-5"
            />
          ))}
        </p>
      </div>
      <div className="flex items-center mt-6 mb-3">
        <img
          className="h-6 mr-[0.33rem]"
          src="/icones/folder-open.png"
          alt="folder open"
        />
        <h4 className="font-semibold">
          <Link href={projectUrl}>{project.shortTitle}</Link>
        </h4>
      </div>
      <p className="text-sm">
        <RichContent value={project.shortDescription} />
      </p>
      <Link
        href={projectUrl}
        className="flex items-center text-xs font-medium mt-4"
      >
        {project.shortTitle}
        <img
          src="/icones/ArrowRight.png"
          alt="ArrowRight"
          className="w-[16px] ml-2"
        />
      </Link>
    </div>
  );
}
