/* eslint-disable @next/next/no-img-element */
import { PATHS } from "@/helpers/constants";
import { METADATA_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export function Footer({ metadata }: { metadata: METADATA_QUERYResult }) {
  const logo = metadata?.logo ? urlFor(metadata.logo).url() : null;

  return (
    <>
      <footer className="relative flex-shrink w-full lg:h-[300px] py-8 max-md:py-16 md:px-12 px-4 xl:max-w-11/12 xl:mx-auto">
        <div className="grid max-md:grid-cols-1 grid-cols-[228px_1.6fr] gap-6 items-center mb-8">
          <Link href={PATHS.INDEX}>
            <img
              src={logo || ""}
              alt="Image du logo de VYO Consulting"
              className="h-8"
            />
          </Link>
          <div className="text-white bg-[#10182b] rounded-full px-4 py-2 w-fit">
            <Link href={PATHS.CONTACT} className="flex items-center text-sm">
              <img
                src="/icones/contact.png"
                alt="contact icon"
                className="inline-block mr-2 w-4"
              />
              Nous contacter
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="text-[#737373] text-sm font-bold">
            <li>
              <Link href={PATHS.SOLUTIONS}>Solutions</Link>
            </li>
            <li>
              <Link href={PATHS.PROJECTS}>Projets</Link>
            </li>
            <li>
              <Link href={PATHS.ABOUT}>À propos</Link>
            </li>
          </ul>
          <div className="mx-4 w-[1px] h-[60px] bg-[#c9cdd2]"></div>
          <ul className="text-sm text-[#737373]">
            <li>Mentions Légales</li>
            <li>Politique de confidentialité</li>
            <li>Paramètres des cookies</li>
          </ul>
        </div>
        <div className="flex items-center py-6">
          <img src="/icones/linkedin.png" alt="Linkedin" className="w-6 mr-4" />
          <img src="/icones/instagram.png" alt="Instagram" className="w-6" />
        </div>
        <p className="text-sm text-[#737373]">
          © 2025 Vyo Consulting - Site réalisé par xxxxxx
        </p>
        {/* <div className="absolute -top-80 -right-16 w-[483px] h-[483px] rounded-full bg-[#DCFCE7] z-[-1]"></div> */}
        {/* <img
          src="/icones/circle-green.png"
          alt="Circle green"
          className="absolute max-[500px]:w-[250px]! max-md:w-[360px] w-[458px] bottom-20 max-md:bottom-50 right-0 z-[-1]"
        /> */}
      </footer>
    </>
  );
}
