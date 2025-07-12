/* eslint-disable @next/next/no-img-element */

const ChoiceSection = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute bg-[#BBF7D0] h-[308px] w-[308px] block z-[-1] -top-8 -left-48 rounded-full" />
        <div className="flex justify-center items-center mt-12 bg-[url('/bckg-choice.png')] p-4 rounded-lg bg-no-repeat bg-cover h-full w-full">
          <div className="bg-white rounded-lg flex flex-col justify-center gap-4 md:max-w-[94%] max-md:w-full px-4 sm:px-8 md:px-20 pt-16 pb-18">
            <div className="text-center mb-8">
              <img
                src="/icones/vyoconsulting.svg"
                alt="vyoconsulting logo"
                className="h-[43px] m-auto"
              />
              <h2 className="text-5xl max-sm:text-3xl font-light mb-8">
                répond à chaque problématique
                <br />
                <span className="inline-block relative">
                  de votre Digital Journey
                  <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
                    <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
                    <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
                  </div>
                </span>
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 mx-auto px-8">
              <div className="space-y-12 lg:w-1/2">
                <div className="relative text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] left-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/search.svg"
                      alt="search icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="max-lg:hidden absolute top-[51px] right-[-272px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-50">
                    <img
                      src="/icones/right-green-connexion.svg"
                      alt="right green connexion icon"
                    />
                  </div>
                  <h4 className="font-semibold">Évaluation et Planification</h4>
                  <ul>
                    <li>
                      • Analyser les besoins et définir une vision numérique.
                    </li>
                    <li>
                      • Identifier les objectifs à long terme et les lacunes
                      numériques.
                    </li>
                    <li>• Cartographier les processus existants</li>
                  </ul>
                </div>
                <div className="relative mt-[65px] text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] left-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/book-open.svg"
                      alt="book open icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="max-lg:hidden absolute top-[-34px] right-[-51px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-50">
                    <img
                      src="/icones/left-green-connexion.svg"
                      alt="left green connexion icon"
                    />
                  </div>
                  <h4 className="font-semibold">
                    Formation et développement des compétences
                  </h4>
                  <ul>
                    <li>
                      • Former les équipes aux nouveaux outils numériques.
                    </li>
                    <li>
                      • Encourager l&apos;apprentissage continu au sein de
                      l&apos;entreprise.
                    </li>
                    <li>
                      • Mettre en place des programmes de certification pour
                      renforcer les compétences.
                    </li>
                  </ul>
                </div>

                <div className="relative mt-[65px] text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] left-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/messages-square.svg"
                      alt="messages square icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="max-lg:hidden absolute top-[-34px] right-[-51px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-50">
                    <img
                      src="/icones/left-green-connexion.svg"
                      alt="left green connexion icon"
                    />
                  </div>
                  <h4 className="font-semibold">Gestion du changement</h4>
                  <ul>
                    <li>
                      • Communiquer clairement la vision de la transformation
                      numérique.
                    </li>
                    <li>
                      • Impliquer les parties prenantes et surmonter la
                      résistance au changement.
                    </li>
                    <li>
                      • Créer un environnement favorable à l&apos;adoption.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12 lg:w-1/2 mt-6 lg:mt-24">
                <div className="relative text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] lg:right-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/settings.svg"
                      alt="settings icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <h4 className="font-semibold">
                    Transformation des processus internes
                  </h4>
                  <ul>
                    <li>
                      • Automatiser les tâches répétitives pour gagner en
                      efficacité.
                    </li>
                    <li>
                      • Intégrer des outils collaboratifs et de gestion de
                      projet.
                    </li>
                    <li>
                      • Optimiser les flux de travail pour une meilleure
                      réactivité.
                    </li>
                  </ul>
                </div>

                <div className="relative mt-20 text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] lg:right-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/brain-circuit.svg"
                      alt="trello icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="max-lg:hidden absolute top-[-44px] left-[-49px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-50">
                    <img
                      src="/icones/right-green-connexion.svg"
                      alt="right green connexion icon"
                    />
                  </div>
                  <h4 className="font-semibold">
                    Adoption de nouvelles technologies
                  </h4>
                  <ul>
                    <li>
                      • Implémenter des solutions comme le cloud, l&apos;IA et
                      l’analyse de données.
                    </li>
                    <li>
                      • Moderniser l’infrastructure pour plus d&apos;agilité.
                    </li>
                    <li>
                      • Mettre en place des outils adaptés aux besoins de
                      l’entreprise.
                    </li>
                  </ul>
                </div>

                <div className="relative mt-[65px] text-left bg-[#fff7ed] shadow-[#16A34A] rounded-2xl shadow-[3px_3px] flex flex-col justify-center gap-4 px-6 py-10 mx-auto w-full">
                  <div className="absolute top-[-33px] lg:right-[-25px] max-lg:left-1/2 max-lg:-translate-x-1/2 bg-white flex items-center justify-center m-auto w-[66px] h-[66px] max-md:w-14 max-md:h-14 rounded-full border border-[#16A34A]">
                    <img
                      src="/icones/pencil-ruler-green.svg"
                      alt="pencil ruler icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="max-lg:hidden absolute top-[-44px] left-[-49px] max-lg:left-1/2 max-lg:-translate-x-1/2 z-50">
                    <img
                      src="/icones/right-green-connexion.svg"
                      alt="right green connexion icon"
                    />
                  </div>
                  <h4 className="font-semibold">Mesure et ajustement</h4>
                  <ul>
                    <li>• Suivre les KPIs pour évaluer les progrès.</li>
                    <li>• Analyser les retours et ajuster les processus.</li>
                    <li>
                      • Réajuster la stratégie en fonction des évolutions du
                      marché.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChoiceSection;
