import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";
import { ALL_EXPERTISES_QUERY } from "@/sanity/lib/queries";
import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";

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
