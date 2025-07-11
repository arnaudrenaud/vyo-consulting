// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const METADATA_QUERY = defineQuery(`*[_type == "metadata"][0]{
  title, subtitle, description, logo
}`);

export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homePage"][0]`);

export const ALL_EXPERTISES_QUERY = defineQuery(
  `*[_type == "expertise"]| order(_createdAt asc)`,
);

export const EXPERTISE_DETAILS_QUERY = defineQuery(
  `*[_type == "expertise" && slug.current == $slug][0]`,
);

export const ALL_PROJECTS_QUERY = defineQuery(
  `*[_type == "project"]| order(_createdAt desc)`,
);
