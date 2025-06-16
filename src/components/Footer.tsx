/* eslint-disable @next/next/no-img-element */
import { PATHS } from "@/helpers/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex-shrink w-full h-[300px] pt-8 md:px-12 px-4 xl:max-w-11/12 xl:mx-auto">
      <div className="flex items-center mb-8">
        <Link href={PATHS.INDEX}>
          <img
            src="/icones/vyoconsulting.png"
            alt="Image du logo de VYO Consulting"
            className="h-8 w-[95%]"
          />
        </Link>
        <div className="text-white bg-[#10182b] rounded-full px-4 py-2 ml-2">
          <Link href={PATHS.CONTACT} className="flex items-center">
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
            <Link href={PATHS.PROJETS}>Projets</Link>
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
    </footer>
  );
}
