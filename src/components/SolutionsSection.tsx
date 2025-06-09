/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardSolution from "./CardSolution";
import ButtonLink from "./ButtonLink";

const SolutionsSection = () => {
  return (
    <section className="mt-20">
      <div className="mx-auto">
        <h2 className="text-center text-5xl">Nos solutions</h2>
        <img src="/underline.png" alt="" className="m-auto w-[285px]" />
      </div>
      <p className="text-center mt-4 text-[#737373]">
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
        <CardSolution />
        <CardSolution />
        <CardSolution />
        <CardSolution />
        <CardSolution />
        <CardSolution />
        <CardSolution />
        <CardSolution />
      </div>
      <div className="mt-12 flex justify-center">
        <ButtonLink href="/solutions" text="Échangeons à propos votre besoin" />
      </div>
    </section>
  );
};

export default SolutionsSection;
