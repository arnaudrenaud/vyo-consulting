/* eslint-disable @next/next/no-img-element */
import { getSolutionThemeColor } from "@/helpers/functions";
import ButtonLink from "../ButtonLink";
import { EXPERTISE_DETAILS_QUERYResult } from "@/sanity/types";

const Professions = ({
  solution,
}: {
  solution: EXPERTISE_DETAILS_QUERYResult;
}) => {
  if (!solution) {
    throw new Error("Solution is undefined.");
  }
  const themeColor = getSolutionThemeColor(solution.slug);

  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <div className="text-center pt-6 pb-4">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">
              Nos métiers {solution.name}
            </h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 mt-10 justify-center">
            {solution.jobs?.map((job) => (
              <div className="text-sm max-sm:mx-auto" key={job._key}>
                <div
                  className={`relative text-left bg-white border-1 border-b-accent ${themeColor.background} rounded-2xl shadow-[3px_3px] flex flex-col gap-4 md:max-w-[725px] px-5 py-5 mx-auto w-full`}
                >
                  <span>
                    <span className="font-semibold">{job.name}</span>
                    <br />
                    {job.levels?.join(" • ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mb-20">
        <ButtonLink href="/contact" text="Construisons votre équipe" />
      </div>

      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </>
  );
};
export default Professions;
