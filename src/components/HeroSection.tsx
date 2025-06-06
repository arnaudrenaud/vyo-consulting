/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
      <div className="hero-text p-4 lg:order-1 order-2">
        <h1 className="text-6xl mb-4">
          <span className="font-bold">Cabinet de conseil</span>
          <br />
          en nouvelles technologies
          <br />
          et stratégie digitale
        </h1>
        <p className="mb-4 max-w-3/5">
          VYO consulting vous guide dans vos projets IT avec{" "}
          <span className="font-bold">
            une approche pragmatique et humaine.{" "}
          </span>
          Ensemble, relevons le défi du digital avec{" "}
          <span className="font-bold">excellence et humilité</span>
        </p>

        <Link
          href="/solutions"
          className="rounded-[20px] py-1 px-3 border border-black"
        >
          Nos solutions sur mesure
        </Link>
      </div>
      <div className="lg:order-2 order-1 flex items-center">
        <img
          src="/hero-img.png"
          alt="Image home section"
          className="rounded-md max-w-11/12 mx-auto lg:max-w-full"
        />
      </div>
    </section>
  );
};
export default HeroSection;
