/* eslint-disable @next/next/no-img-element */

const Values = () => {
  return (
    <section>
      <div className="bg-white rounded-sm text-center p-6 mt-8">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl">Nos valeurs</h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="text-left">
            <img
              src="/icones/ethique.svg"
              alt="ethique icone"
              className="mb-1"
            />
            <h3 className="uppercase font-medium text-3xl">Ethique</h3>
            <p className="text-sm">
              Elle est au cœur de notre approche, garantissant des{" "}
              <span className="font-bold">
                solutions transparentes, responsables et respectueuses
              </span>{" "}
              des valeurs de nos clients.
            </p>
          </div>

          <div className="text-left">
            <img
              src="/icones/user-round.svg"
              alt="humanisme icone"
              className="mb-1"
            />
            <h3 className="uppercase font-medium text-3xl">Humanisme</h3>
            <p className="text-sm">
              Il guide notre démarche, plaçant l’humain au centre de chaque
              projet pour une{" "}
              <span className="font-bold">
                transformation digitale respectueuse et adaptée
              </span>
              à chacun.
            </p>
          </div>

          <div className="text-left">
            <img
              src="/icones/speech.svg"
              alt="pragmatisme icone"
              className="mb-1"
            />
            <h3 className="uppercase font-medium text-3xl">Pragmatisme</h3>
            <p className="text-sm">
              Il est central dans notre action, visant des solutions{" "}
              <span className="font-bold">réalistes et efficaces,</span>{" "}
              parfaitement alignées avec les besoins et objectifs de chaque
              client.
            </p>
          </div>
        </div>
        <div className="relative mt-4 flex">
          <h3 className="uppercase bg-gradient-to-r from-[#86EFAC] to-[#22C55E] py-1 font-light text-3xl h-fit w-full m-auto">
            Transformation digitale
          </h3>
          <img src="/icones/polygon.svg" alt="polygon" className="h-[76px]" />
        </div>
      </div>
    </section>
  );
};

export default Values;
