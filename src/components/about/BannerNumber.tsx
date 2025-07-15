/* eslint-disable @next/next/no-img-element */

const BannerNumber = () => {
  return (
    // dynamiser mt-10 if contactPage
    <ul className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_1fr_1.2fr] text-center mt-16 gap-4 w-full">
      <li className="col-span-1 lg:col-span-1 flex justify-center items-center lg:border-r lg:border-[#c9cdd2] text-4xl max-lg:mb-12">
        <div className="relative">
          Chiffres
          <img src="/underline.png" alt="underline" className="absolute" />
        </div>
      </li>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:contents gap-4">
        <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1 md:pr-5">
          <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img
              src="/icones/partypopper.png"
              alt="partypopper"
              className="w-6 h-6"
            />
          </div>
          <p className="text-3xl my-2">2024</p>
          <p className="text-sm">Création de la société</p>
        </li>

        <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1 md:pr-5">
          <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img
              src="/icones/banknote.png"
              alt="banknote"
              className="w-6 h-6"
            />
          </div>
          <p className="text-3xl my-2">100%</p>
          <p className="text-sm">Autofinancé</p>
        </li>

        <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1 md:pr-5">
          <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img src="/icones/award.png" alt="award" className="w-6 h-6" />
          </div>
          <p className="text-3xl my-2">20 ans</p>
          <p className="text-sm">D&apos;expérience</p>
        </li>

        <li className="lg:border-r lg:border-[#c9cdd2] lg:col-span-1 md:pr-5">
          <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img
              src="/icones/green-folder.png"
              alt="green-folder"
              className="w-6 h-6"
            />
          </div>
          <p className="text-3xl my-2">+ de 20</p>
          <p className="text-sm">Projets réalisés</p>
        </li>

        <li className="lg:col-span-1 max-md:md:pr-5">
          <div className="flex items-center justify-center m-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img
              src="/icones/handshake.png"
              alt="handshake"
              className="w-6 h-6"
            />
          </div>
          <p className="text-3xl my-2">+ de 5</p>
          <p className="text-sm">Clients Grand Compte</p>
        </li>
      </div>
    </ul>
  );
};

export default BannerNumber;
