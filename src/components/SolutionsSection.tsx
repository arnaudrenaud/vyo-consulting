import React from "react";
import CardSolution from "./CardSolution";
import ButtonLink from "./ButtonLink";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";
import { getSolutionsInOrder } from "@/helpers/functions";
import { useRouter } from "next/router";

const SolutionsSection = ({
  expertises,
  showDescription,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
  showDescription: boolean;
}) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <section className={`${currentPath === "/" ? "mt-12" : ""}`}>
      <div className="text-center">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl max-md:text-3xl">Nos solutions</h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
        <h2 className="text-center text-5xl"></h2>
      </div>
      <p className="text-center mt-8 text-[#737373]">
        <span className="font-bold">
          Envie d&apos;accélérer votre transformation digitale ?
        </span>
        <br />
        Nous serions ravis d’échanger avec vous afin de mieux comprendre vos
        enjeux digitaux et explorer
        <br />
        ensemble les leviers d’innovation et de performance que nous pourrions
        activer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 xl:max-w-[1200px] xl:mx-auto">
        {getSolutionsInOrder(expertises).map((expertise) => (
          <CardSolution
            key={expertise._id}
            {...expertise}
            showDescription={showDescription}
          />
        ))}
      </div>
      <div className="my-12 flex justify-center">
        <ButtonLink href="/contact" text="Échangeons à propos votre besoin" />
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </section>
  );
};

export default SolutionsSection;
