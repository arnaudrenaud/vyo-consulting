/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const CardSolution = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[3px_3px_0_0_#C026D3] flex flex-col justify-center gap-4 md:max-w-[725px] px-4 py-8 max-md:px-8 mx-auto">
      <h4 className="font-bold text-2xl">
        <span className="text-[#C026D3]">vyo.</span>design
      </h4>
      <p className="text-[0.9rem] text-[#737373] text-sm">
        Nous créons des expériences utilisateur intuitives et esthétiques,
        alliant créativité et fonctionnalité pour maximiser l&apos;impact de vos
        produits.
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
