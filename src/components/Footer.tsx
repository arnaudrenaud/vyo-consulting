import { PATHS } from "@/helpers/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex-shrink w-full h-[300px] pt-8 text-white bg-black">
      <div className="flex justify-between">
        <h4>Test de footer</h4>
      </div>
      <Link href={PATHS.INDEX}>VYO Consulting</Link>
    </footer>
  );
}
