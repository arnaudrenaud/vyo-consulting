/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { getSolutionThemeColor } from "@/helpers/functions";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { RichContent } from "@/components/utils/RichContent";
import { PATHS, SEARCH_PARAMS } from "@/helpers/constants";

const Projects = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {projects.slice(0, 9).map((project) => (
          <div
            key={project._id}
            className={`bg-white border-1 border-accent rounded-2xl shadow-[3px_3px] ${getSolutionThemeColor(project.expertises[0].slug).background} w-[95%]! ml-[10px]! px-4 py-8 max-md:px-8`}
          >
            <div className="relative">
              <img
                src="/icones/projets-1.png"
                alt={`projet ${project.shortTitle}`}
              />
              {/* <img src={`/icones/projets-${n}.png`} alt={`projet ${n}`} /> */}
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
              <h4 className="font-semibold">{project.shortTitle}</h4>
            </div>
            <p className="text-sm">
              <RichContent value={project.shortDescription} />
            </p>
            <Link
              href={`${PATHS.PROJECTS}?${SEARCH_PARAMS.PROJECT_ID}=${project._id}`}
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
        ))}
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] top-[22rem] -left-24 rounded-full" />
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2] my-8"></div>
    </>
  );
};

export default Projects;
