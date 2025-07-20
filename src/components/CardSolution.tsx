/* eslint-disable @next/next/no-img-element */
import { RichContent } from "@/components/utils/RichContent";
import { PATHS } from "@/helpers/constants";
import { getSolutionThemeColor } from "@/helpers/functions";
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
  const themeColor = getSolutionThemeColor(slug);

  const logoUrl = logo ? urlFor(logo).url() : "";
  const solutionUrl = `${PATHS.SOLUTIONS}/${slug.current}`;

  return (
    <div
      className={`bg-white border-1 border-b-accent rounded-2xl shadow-[3px_3px] ${themeColor.background} flex flex-col justify-center gap-4 md:max-w-[725px] px-4 py-8 mx-auto w-full`}
    >
      <h4>
        <Link href={solutionUrl}>
          <img className="h-[24px]" src={logoUrl} alt={`Logo de vyo.${name}`} />
        </Link>
      </h4>
      {showDescription && (
        <p className="text-[0.9rem] text-[#737373] text-sm">
          <RichContent value={shortDescription} />
        </p>
      )}
      <Link
        href={solutionUrl}
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
