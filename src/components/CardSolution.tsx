/* eslint-disable @next/next/no-img-element */
import { RichContent } from "@/components/utils/RichContent";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";
import Link from "next/link";

const CardSolution = ({
  name,
  shortDescription,
}: ALL_EXPERTISES_QUERYResult[0]) => {
  return (
    <div className="bg-white rounded-2xl shadow-[3px_3px_0_0_#C026D3] flex flex-col justify-center gap-4 md:max-w-[725px] px-4 py-8 max-md:px-8 mx-auto">
      <h4 className="font-bold text-2xl">
        <span className="text-[#C026D3]">vyo.</span>
        {name}
      </h4>
      <p className="text-[0.9rem] text-[#737373] text-sm">
        <RichContent value={shortDescription} />
      </p>
      <Link href="/solutions" className="flex items-center text-xs font-medium">
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
