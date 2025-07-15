import ButtonLink from "../ButtonLink";

const Approach = () => {
  return (
    <section className="mt-4 relative">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl max-md:text-4xl">
            Notre approche
          </h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:max-w-[820px]">
        <div className="space-y-12 md:w-1/2 md:content-center">
          <div>
            <h3 className="text-3xl max-sm:text-2xl font-medium">
              Un acteur engagé dans un modèle humain et éthique.
            </h3>
            <p className="text-base mt-6">
              VYO Consulting se base sur des valeurs de pragmatisme, humanisme
              et éthique, et place l’épanouissement de ses collaborateurs au
              cœur de ses préoccupations. L’entreprise promeut un environnement
              propice à la créativité, à la confiance et à la coopération, et
              encourage une collaboration étroite avec ses clients sans se
              substituer à leurs compétences.
            </p>
          </div>
          <div>
            <h3 className="text-3xl max-sm:text-2xl font-medium">
              Une approche collective et collaborative.
            </h3>
            <p className="text-base mt-6">
              VYO Consulting valorise l&apos;intelligence collective et le
              travail d&apos;équipe pour atteindre les objectifs de ses clients.
              L’entreprise mise sur les compétences complémentaires de ses
              collaborateurs et l’intégration d’une expertise diversifiée pour
              faire face aux défis du numérique.
            </p>
          </div>
        </div>

        <div className="space-y-12 md:w-1/2">
          <div>
            <h3 className="text-3xl max-sm:text-2xl font-medium">
              Un accompagnement complet en transformation digitale.
            </h3>
            <p className="text-base mt-6">
              VYO Consulting se distingue par sa capacité à intervenir à toutes
              les étapes d&apos;un projet de transformation numérique, en
              soutenant les équipes métiers en amont et en gérant les aspects
              techniques en aval. Cela permet une prise en charge cohérente et
              sans rupture du projet.
            </p>
          </div>
          <div>
            <h3 className="text-3xl max-sm:text-2xl font-medium">
              Une expertise en stratégie digitale et nouvelles technologies.
            </h3>
            <p className="text-base mt-6">
              En tant que &apos;poisson pilote&apos;, VYO Consulting se
              positionne comme un guide pour ses clients, les aidant à atteindre
              leurs objectifs de transformation digitale avec réactivité grâce à
              son expertise en stratégie digitale et en nouvelles technologies.
            </p>
          </div>
          <div>
            <h3 className="text-3xl max-sm:text-2xl font-medium">
              Un cabinet indépendant et flexible.
            </h3>
            <p className="text-base mt-6">
              VYO Consulting est un cabinet 100% indépendant, agissant sur fonds
              propres, ce qui lui permet de garantir une approche transparente,
              orientée vers les besoins réels de ses clients sans contraintes
              externes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ButtonLink
          href="/contact"
          text="Discutons de votre besoin"
          additionnalClasses="m-auto"
        />
      </div>

      <div className="absolute bg-[#DCFCE7] h-[535px] w-[535px] block z-[-1] -top-24 -left-[29rem] rounded-full" />
      <div className="absolute bg-[#DCFCE7] h-[926px] w-[926px] block z-[-1] -top-16 -right-[30rem] rounded-full" />
    </section>
  );
};
export default Approach;
