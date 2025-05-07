// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const ALL_EXPERTISES_QUERY = defineQuery(`*[_type == "expertise"]{
  _id, name, slug, shortDescription
}`);
