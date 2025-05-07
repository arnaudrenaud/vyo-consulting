import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { ALL_EXPERTISES_QUERY } from "@/sanity/lib/queries";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";
import Head from "next/head";
import { TITLE } from "@/helpers/constants";

export async function getStaticProps() {
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);
  return {
    props: { expertises },
  };
}

export default function Home({
  expertises,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
}) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta property="og:title" content={TITLE} key="title" />
      </Head>

      <h1>
        Cabinet de conseil en nouvelles technologies et stratégie digitale.
      </h1>

      <h2>Nos expertises au service de votre transformation digitale.</h2>
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
