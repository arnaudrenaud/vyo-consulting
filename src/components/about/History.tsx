/* eslint-disable @next/next/no-img-element */

const History = () => {
  return (
    <div className="md:h-[60rem] w-full relative">
      <div className="absolute bg-[#DCFCE7] h-[228px] w-[228px] block z-[-1] -top-12 left-30 rounded-full" />
      <div className="absolute bg-[#BBF7D0] h-[174] w-[174] block z-[-1] -bottom-[160px] -right-[100px] rounded-full" />

      <div className="flex justify-center items-center mt-12 bg-[url('/histoire-bckg.jpg')] p-4 rounded-lg bg-no-repeat bg-cover h-full w-full">
        <div className="bg-white rounded-lg flex flex-col justify-center gap-4 text-justify md:max-w-[725px] pt-16 pb-16 max-md:px-8 px-16">
          <div className="flex items-center justify-center mr-auto w-20 h-20 max-md:w-14 max-md:h-14 rounded-full border border-black">
            <img src="/icones/history.svg" alt="medal" className="m-auto" />
          </div>
          <div className="relative w-fit">
            <h2 className="text-5xl font-light md:text-5xl mb-2">
              Notre histoire
            </h2>
            <img
              src="/underline.png"
              alt="underline"
              className="absolute w-auto"
            />
          </div>
          <p className="max-sm:text-sm mt-4">
            Fondée en 2024 par Joachim Ravaud, après 20 ans d&apos;expérience
            dans le monde du conseil en nouvelles technologies et de la
            transformation digitale, en France et à l&apos;international, VYO
            Consulting est née de la volonté de mettre la transformation
            numérique au service des entreprises. S&apos;appuyant sur sa propre
            expérience, une conviction s’est imposée : réussir une
            transformation ne repose pas uniquement sur la maîtrise des
            technologies, mais avant tout sur les &quot;Savoir&quot; des femmes
            et des hommes qui travaillent en équipe. Notre ADN réside dans une
            proposition de valeurs alliant Savoir-être, Savoir-faire et
            Savoir-vivre !
          </p>
          <br />
          <p className="max-sm:text-sm font-bold">
            C’est dans cet esprit qu’est née l’idée de VYO Consulting, un
            cabinet de conseil agile et humain !
          </p>
          <p className="max-sm:text-sm">
            Collaborer au quotidien avec des collaborateurs et des partenaires
            qui partagent les mêmes valeurs, permet de relever des défis bien
            plus grands qu&apos;une simple approche méthodologique ou
            technologique : éthique. humanisme. pragmatisme incarnent nos
            fondamentaux.
          </p>
          <p className="max-sm:text-sm">
            A l&apos;aube de l&apos;avènement de l&apos;IA, où la capacité des
            technologies s&apos;accélère de manière inexorable et exponentielle,
            nous servons un objectif clair : tracer un chemin dans lequel les
            technologies mettront en avant le bien commun.
          </p>
        </div>
      </div>
    </div>
  );
};
export default History;
