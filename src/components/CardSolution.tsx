/* eslint-disable @next/next/no-img-element */
import { RichContent } from "@/components/utils/RichContent";
import { PATHS } from "@/helpers/constants";
import { SOLUTION_THEME_COLOR } from "@/helpers/theme";
import { urlFor } from "@/sanity/lib/image";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";
import Link from "next/link";

const CardSolution = ({
  slug,
  name,
  shortDescription,
  logo,
  showDescription,
}: ALL_EXPERTISES_QUERYResult[0] & { showDescription: boolean }) => {
  const themeColor =
    SOLUTION_THEME_COLOR[slug.current] || SOLUTION_THEME_COLOR.default;

  const logoUrl = logo ? urlFor(logo).url() : "";

  return (
    <div
      className={`bg-white rounded-2xl shadow-[3px_3px] ${themeColor.background} flex flex-col justify-center gap-4 md:max-w-[725px] px-4 py-8 mx-auto w-full`}
    >
      <h4>
        <img className="h-[24px]" src={logoUrl} alt={`Logo de vyo.${name}`} />
      </h4>
      {showDescription && (
        <p className="text-[0.9rem] text-[#737373] text-sm">
          <RichContent value={shortDescription} />
        </p>
      )}
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
