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

const ModalProject = ({ projects }: { projects: ALL_PROJECTS_QUERYResult }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const projectFromParam = projects.find(
    (p) => p._id === searchParams.get("project"),
  );

  const logo = projectFromParam?.clientLogo
    ? urlFor(projectFromParam.clientLogo).url()
    : null;

  return (
    <>
      {searchParams.get("project") && (
        <Dialog
          open
          onOpenChange={() => {
            router.replace(PATHS.PROJECTS);
          }}
        >
          <DialogContent className="!max-w-[inherit] !w-[90%] !max-h-[90vh] !overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-6xl max-lg:text-5xl max-md:text-3xl font-light mr-8 px-5">
                {projectFromParam?.fullTitle}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-between mt-4 px-5">
              <div>
                <p className="text-sm text-[#737373]">Client:</p>
                <p className="font-semibold">{projectFromParam?.client}</p>
              </div>
              <img src={logo || ""} alt="ratp logo" className="h-[44px]" />
            </div>

            <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

            <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 space-x-4 px-5">
              <div>
                <p className="text-sm text-[#737373] mb-1">
                  Contexte de l&apos;intervention:
                </p>
                <p className="text-[#0A0A0A]">
                  Intervention pour digitaliser les procédures d&apos;incidents
                  jusqu&apos;alors gérées manuellement via des classeurs papier.
                  Un enjeu majeur : offrir un outil accessible en tout temps et
                  en toute condition (même sans connexion Internet) pour les
                  conducteurs de train.
                </p>
              </div>

              <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                <p className="text-sm text-[#737373] mb-1">Objectifs:</p>
                <ul className="text-[#0A0A0A] ml-6">
                  <li className="list-disc">
                    Offrir un outil digital pour les conducteurs de train.
                  </li>
                  <li className="list-disc">
                    Remplacer les classeurs papier encombrants et peu pratiques.
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

            <div className="px-5 text-left">
              <p className="text-sm text-[#737373] mb-1">Réalisations:</p>
              <ul className="text-[#0A0A0A] ml-6">
                <li className="list-disc">
                  Déploiement du build V3 de la plateforme Digiproc.
                </li>
                <li className="list-disc">
                  Intégration de 8 nouveaux classeurs numériques.
                </li>
              </ul>

              <div className="lg:flex items-center mt-4 gap-2 mb-8 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
                <img
                  src="c1.svg"
                  alt="c1"
                  className="max-lg:mx-auto max-[1200px]:h-48"
                />
                <img
                  src="c3.svg"
                  alt="c3"
                  className="max-lg:mx-auto max-[1200px]:h-48"
                />
                <img
                  src="c2.svg"
                  alt="c2"
                  className="max-lg:mx-auto max-[1200px]:h-48"
                />
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="grid max-md:grid-cols-1 md:grid-cols-2 space-x-4 py-2">
                <div>
                  <p className="text-sm text-[#737373] mb-1">Résultats:</p>
                  <p className="text-[#0A0A0A]">
                    L’outil a permis de digitaliser une dizaine de classeurs,
                    améliorant l’efficacité des conducteurs de train.
                  </p>
                  <p className="font-bold">
                    10% azerty I 33% de réussite I 10% azerty
                  </p>
                </div>

                <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                  <p className="text-sm text-[#737373] mb-1">
                    Équipe impliquée :
                  </p>
                  <p className="text-[#0A0A0A] ml-6">
                    1 Product Owner (PO), 1 Product Owner adjoint (PPO), 1 Team
                    Leader (TL), 1 Designer UX/UI, 2 Développeurs (DEV), 1
                    Delivery Lead.
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="grid max-md:grid-cols-1 md:grid-cols-2 space-x-4 py-2">
                <div>
                  <p className="text-sm text-[#737373] mb-1">Technologies:</p>
                  <p className="text-[#0A0A0A]">
                    Plateforme Digiproc en JavaScript.
                  </p>
                </div>

                <div className="lg:border-l lg:border-gray-300 lg:pl-4 max-lg:mt-4">
                  <p className="text-sm text-[#737373] mb-1">Impact:</p>
                  <ul className="text-[#0A0A0A] ml-6">
                    <li className="list-disc">
                      Simplification des procédures d&apos;incident.
                    </li>
                    <li className="list-disc">
                      Réduction du besoin de documentation papier dans des
                      conditions de travail difficiles (cabine étroite et
                      sombre).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#c9cdd2] my-2" />

              <div className="flex items-center justify-between md:mt-4 max-md:mt-8">
                <div>
                  <p className="text-sm text-[#737373] mb-2">La team Vyo :</p>
                  <div className="flex items-center mt-1">
                    <img src="/team-vyo.svg" alt="team vyo logo" />
                    <div className="ml-3">
                      <p>Oria K</p>
                      <p className="text-sm text-[#0A0A0A] font-bold">
                        Product Owner
                      </p>
                    </div>
                  </div>
                </div>
                {/* Là il faut récupérer depuis expertise sij'en suis la logique le logo (vyo.type_du_projet) */}
                {/* <p className="absolute top-2.5 left-2.5 text-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] bg-white pl-4 rounded-2xl py-1">
                  <img
                    src={logo || " "}
                    alt={`Logo vyo.${projectFromParam?.name}`}
                    className="h-5"
                  />
                </p> */}
              </div>
              <div className="flex items-center justify-end mt-6 gap-4">
                {/* download PDF to make */}
                <Button variant="outline">Je télécharge</Button>
                <Button asChild variant="default">
                  <Link href="/contact">Contactez-nous</Link>
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
