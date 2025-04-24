import Link from "next/link";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { AUTHORS_QUERY, LAST_POST_QUERY } from "@/sanity/lib/queries";
import { AUTHORS_QUERYResult, LAST_POST_QUERYResult } from "@/sanity/types";

import { PATHS } from "@/lib/urls";
import { SortBy, getSortedObjects } from "@/lib/arrays";
import { PageLayout } from "@/components/PageLayout";

export async function getStaticProps() {
  const lastPost = await client.fetch(LAST_POST_QUERY);
  const authors = await client.fetch(AUTHORS_QUERY);
  return {
    props: { lastPost, authors },
  };
}

export default function Home({
  authors,
  lastPost,
}: {
  lastPost: LAST_POST_QUERYResult;
  authors: AUTHORS_QUERYResult;
}) {
  const [sortBy, setSortBy] = useState<SortBy>("ALPHA_ASC");

  return (
    <PageLayout>
      <>
        <h1>Last post:</h1>

        <h2>{lastPost?.title}</h2>
        <Link href={`${PATHS.POSTS}/1`}>See more…</Link>

        <hr />
        <h2>All our authors:</h2>
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value as SortBy);
          }}
        >
          <option value="ALPHA_ASC">A → Z</option>
          <option value="ALPHA_DESC">Z → A</option>
        </select>
        <ol>
          {getSortedObjects(authors, { key: "name", sortBy }).map((author) => (
            <li key={author._id}>
              {author.name} ({author.dateOfBirth})
            </li>
          ))}
        </ol>
      </>
    </PageLayout>
  );
}
