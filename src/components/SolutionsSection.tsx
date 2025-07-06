import React from "react";
import CardSolution from "./CardSolution";
import ButtonLink from "./ButtonLink";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";

const SolutionsSection = ({
  expertises,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
}) => {
  return (
    <section>
      <div className="text-center">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl">Nos solutions</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-12">
        {expertises.map((expertise) => (
          <CardSolution key={expertise._id} {...expertise} />
        ))}
      </div>
      <div className="my-12 flex justify-center">
        {/* rendre dynamique le texte du bouton */}
        <ButtonLink href="/solutions" text="Échangeons à propos votre besoin" />
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>
    </section>
  );
};

export default SolutionsSection;
