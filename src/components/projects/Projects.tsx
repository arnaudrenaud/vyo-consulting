import { ProjectCard } from "@/components/projects/ProjectCard";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";

const Projects = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {projects.slice(0, 9).map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
        <div className="absolute bg-[#BBF7D0] h-[174px] w-[174px] block z-[-1] top-[22rem] -left-24 rounded-full" />
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2] my-8"></div>
    </>
  );
};

export default Projects;
