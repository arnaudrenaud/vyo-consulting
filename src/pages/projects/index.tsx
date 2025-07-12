import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PATHS, SEARCH_PARAMS } from "@/helpers/constants";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import { client } from "@/sanity/lib/client";
import { ALL_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ALL_PROJECTS_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <>
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`${PATHS.PROJECTS}?${SEARCH_PARAMS.PROJECT_ID}=${project._id}`}
        >
          {project.shortTitle}
        </Link>
      ))}

      {searchParams.get("project") && (
        <Dialog
          open
          onOpenChange={() => {
            router.replace(PATHS.PROJECTS);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Titre</DialogTitle>
              <DialogDescription>lorem ipsum dolor sit amet…</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
