import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { ALL_EXPERTISES_QUERY, METADATA_QUERY } from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import BannerNumber from "@/components/BannerNumber";
import SolutionsSection from "@/components/SolutionsSection";
import Processus from "@/components/Processus";
import { Button } from "@/components/ui/button";
// import { TITLE } from "@/helpers/constants";

export async function getStaticProps() {
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);
  const metadata = await client.fetch(METADATA_QUERY);
  return {
    props: { expertises, metadata },
  };
}

export default function Home({
  expertises,
  metadata,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
  metadata: METADATA_QUERYResult;
}) {
  if (!metadata) {
    throw new Error("Metadata is undefined");
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          property="og:title"
          content={metadata.description || ""}
          key="title"
        />
      </Head>

      <HeroSection />
      <BannerNumber />
      <SolutionsSection />
      <Processus />

      <h1>{metadata.title}</h1>
      <h2>{metadata.subtitle}</h2>

      {/* TODO: delete */}
      <Button>Exemple de bouton shadcn/ui</Button>

      <ul className="space-y-4">
        {expertises.map((expertise) => (
          <li key={expertise._id}>
            <div>{expertise.name}</div>
            {expertise.shortDescription && (
              <PortableText value={expertise.shortDescription} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
