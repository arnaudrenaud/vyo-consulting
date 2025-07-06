/* eslint-disable @next/next/no-img-element */
import { RichContent } from "@/components/utils/RichContent";
import { PATHS } from "@/helpers/constants";
import { SOLUTION_THEME_COLOR } from "@/helpers/theme";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";
import Link from "next/link";

const CardSolution = ({
  slug,
  name,
  shortDescription,
}: ALL_EXPERTISES_QUERYResult[0]) => {
  const themeColor =
    SOLUTION_THEME_COLOR[slug.current] || SOLUTION_THEME_COLOR.default;

  return (
    <div
      className={`bg-white rounded-2xl shadow-[3px_3px] ${themeColor.background} flex flex-col justify-center gap-4 md:max-w-[725px] px-4 py-8 mx-auto`}
    >
      <h4 className="font-bold text-2xl">
        <span className={themeColor.text}>vyo.</span>
        {name}
      </h4>
      {/* rendre conditionnel l'affichage de la description en fonction de l'url */}
      <p className="text-[0.9rem] text-[#737373] text-sm">
        <RichContent value={shortDescription} />
      </p>
      <Link
        href={`${PATHS.SOLUTIONS}/${slug.current}`}
        className="flex items-center text-xs font-medium"
      >
        Découvrir cette offre
        <img
          src="/icones/ArrowRight.png"
          alt="ArrowRight"
          className="w-[16px] ml-2"
        />
      </Link>
    </div>
  );
};

export default CardSolution;
