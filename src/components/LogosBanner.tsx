import Image from "next/image";
import styles from "./LogosBanner.module.css";
import { GeistSans } from "geist/font/sans";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type LogoBannerItem = {
  _key?: string;
  name?: string;
  image?: unknown;
};

type LogosBannerProps = {
  title?: string;
  logos?: LogoBannerItem[] | null;
};

const fallbackLogos = [
  { src: "/logos/ixxi.png", alt: "IXXI" },
  { src: "/logos/ratp_smart_systems.png", alt: "RATP Smart Systems" },
  { src: "/logos/servier.png", alt: "Servier" },
  { src: "/logos/paragon.png", alt: "Paragon" },
] as const;

export default function LogosBanner({
  title = "Ils nous font confiance",
  logos,
}: LogosBannerProps) {
  const displayLogos = (
    logos?.length
      ? logos.map((logo, index) => {
          const fallback = fallbackLogos[index % fallbackLogos.length];
          return {
            src: logo.image
              ? urlFor(logo.image as SanityImageSource).url()
              : fallback.src,
            alt: logo.name || fallback.alt,
          };
        })
      : fallbackLogos
  ).map((logo, index) => ({ ...logo, key: `${logo.src}-${index}` }));

  return (
    <>
      <div className="h-[1px] w-1/2 bg-[#c9cdd2] mx-auto mt-6" />
      <section
        className={`${styles.section} ${GeistSans.className}`}
        aria-label={title}
      >
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">{title}</h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
        </div>

        <div className={styles.fixedLayout}>
          <ul className={styles.grid}>
            {displayLogos.map((logo) => (
              <li key={logo.key} className={styles.logoBox}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={72}
                  unoptimized
                  className={styles.logo}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.animatedLayout}>
          <div className={styles.animatedMask}>
            <div className={styles.animatedTrack}>
              {Array.from({ length: 3 }).map((_, trackIndex) => (
                <ul
                  key={trackIndex}
                  className={styles.animatedSet}
                  aria-hidden={trackIndex > 0}
                >
                  {displayLogos.map((logo) => (
                    <li
                      key={`${logo.key}-${trackIndex}`}
                      className={styles.logoBox}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={180}
                        height={72}
                        unoptimized
                        className={styles.logo}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
