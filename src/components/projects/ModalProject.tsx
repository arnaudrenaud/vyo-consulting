/* eslint-disable @next/next/no-img-element */
"use client";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import { useSearchParams, useRouter } from "next/navigation";
import { PATHS } from "@/helpers/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RichContent } from "@/components/utils/RichContent";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const ModalProject = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const project = projects.find(
    (p) => p.slug.current === searchParams.get("project"),
  );

  if (!project) {
    return "Project not found.";
  }

  const logo = project?.clientLogo ? urlFor(project.clientLogo).url() : null;

  return (
    <>
      {searchParams.get("project") && (
        <Dialog
          open
          onOpenChange={() => {
            router.replace(PATHS.PROJECTS);
          }}
        >
          <DialogContent className="!max-w-[inherit] !w-[90%] !max-h-[90vh] !overflow-y-auto bg-white overflow-x-hidden">
            <DialogHeader>
              <DialogTitle className="text-6xl max-lg:text-5xl max-sm:text-2xl max-md:text-3xl font-light sm:mr-8 sm:px-5">
                {project?.fullTitle}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-between mt-4 px-5">
              <div>
                <p className="text-sm text-[#737373]">Client:</p>
                <p className="font-semibold">{project?.client}</p>
              </div>
              <img src={logo || ""} alt="Logo du client" className="h-[44px]" />
            </div>

            <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

            <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 space-x-4 px-5">
              <div>
                <p className="text-sm text-[#737373] mb-1">
                  Contexte de l&apos;intervention:
                </p>
                <p className="text-[#0A0A0A]">
                  <RichContent value={project.context} />
                </p>
              </div>

              <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                <p className="text-sm text-[#737373] mb-1">Objectifs:</p>
                <RichContent value={project.goals} />
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

            <div className="px-5 text-left">
              <p className="text-sm text-[#737373] mb-1">Réalisations:</p>
              <RichContent value={project.realizations} />

              <div className="lg:flex items-center mt-4 gap-2 mb-8 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
                {project.realizationScreenshots
                  ?.filter((screenshot) => urlFor(screenshot).url())
                  .map((screenshot) => (
                    <img
                      key={screenshot._key}
                      src={urlFor(screenshot).url()}
                      alt="Illustration de réalisation"
                      className="max-lg:mx-auto max-[1200px]:h-48"
                    />
                  ))}
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="grid max-md:grid-cols-1 md:grid-cols-2 space-x-4 py-2">
                <div>
                  <p className="text-sm text-[#737373] mb-1">Résultats:</p>
                  <RichContent value={project.achievements} />
                </div>

                <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                  <p className="text-sm text-[#737373] mb-1">
                    Équipe impliquée :
                  </p>
                  <RichContent value={project.team} />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="grid max-md:grid-cols-1 md:grid-cols-2 space-x-4 py-2">
                <div>
                  <p className="text-sm text-[#737373] mb-1">Technologies:</p>
                  <RichContent value={project.technology} />
                </div>

                <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                  <p className="text-sm text-[#737373] mb-1">Impact:</p>
                  <RichContent value={project.impact} />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="flex flex-col md:flex-row justify-between items-top gap-4 md:mt-4 max-md:mt-8">
                <div className="flex justify-between flex-row">
                  <div>
                    <p className="text-sm text-[#737373] mb-3">La team Vyo :</p>
                    <div className="grid gap-3">
                      {project.collaborators?.map((collaborator) => (
                        <div
                          key={collaborator._id}
                          className="flex gap-2 items-center"
                        >
                          <img
                            className="rounded-[43px]"
                            width={86}
                            height={86}
                            src={urlFor(
                              collaborator.profilePicture as SanityImageSource,
                            ).url()}
                            alt={`Photo de profil de ${collaborator.firstName}`}
                          />
                          <div className="ml-3">
                            <p>
                              {collaborator.firstName} {collaborator.lastName}
                            </p>
                            <p className="text-sm text-[#0A0A0A] font-bold">
                              {collaborator.jobTitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="w-fit text-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white pl-4 rounded-2xl py-1">
                    {project.expertises.map((expertise) => (
                      <img
                        key={expertise._id}
                        src={urlFor(expertise.logo as SanityImageSource).url()}
                        alt={`Logo vyo.${project?.expertises[0].name}`}
                        className="h-5"
                      />
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-6 gap-4">
                <Button variant="outline">Je télécharge</Button>
                <Button asChild variant="default">
                  <Link href={PATHS.CONTACT}>Contactez-nous</Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalProject;
