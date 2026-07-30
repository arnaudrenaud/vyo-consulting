import Image from "next/image";
import styles from "./LogosBanner.module.css";
import { GeistSans } from "geist/font/sans";

type LogosBannerProps = {
  title?: string;
};

const logos = [
  { src: "/logos/ixxi.png", alt: "IXXI" },
  { src: "/logos/ratp_smart_systems.png", alt: "RATP Smart Systems" },
  { src: "/logos/servier.png", alt: "Servier" },
  { src: "/logos/paragon.png", alt: "Paragon" },
] as const;

export default function LogosBanner({
  title = "Ils nous font confiance",
}: LogosBannerProps) {
  return (
    <>
      <div className="h-[1px] w-1/2 bg-[#c9cdd2] mx-auto mt-6" />
      <section
        className={`${styles.section} ${GeistSans.className}`}
        aria-label={title}
      >
        <p className={styles.title}>{title}</p>

        <div className={styles.fixedLayout}>
          <ul className={styles.grid}>
            {logos.map((logo, index) => (
              <li key={`${logo.src}-${index}`} className={styles.logoBox}>
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
                  {logos.map((logo, logoIndex) => (
                    <li
                      key={`${logo.src}-${trackIndex}-${logoIndex}`}
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
