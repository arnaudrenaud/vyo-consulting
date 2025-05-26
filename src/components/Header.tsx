/* eslint-disable @next/next/no-img-element */
import { PATHS } from "@/helpers/constants";
import Link from "next/link";
import { METADATA_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export function Header({ metadata }: { metadata: METADATA_QUERYResult }) {
  const logo = metadata?.logo ? urlFor(metadata.logo).url() : null;

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 text-sm text-background bg-foreground h-16 flex items-center">
      <Link href={PATHS.INDEX}>
        <img
          src={logo || ""}
          alt="Image du logo de VYO Consulting"
          className="h-8"
        />
      </Link>
    </nav>
  );
}
