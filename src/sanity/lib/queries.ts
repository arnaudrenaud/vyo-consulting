// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homePage"][0]`);

export const ALL_EXPERTISES_QUERY =
  defineQuery(`*[_type == "expertise"]| order(_createdAt asc){
  _id, name, slug, shortDescription
}`);

export const METADATA_QUERY = defineQuery(`*[_type == "metadata"][0]{
  title, subtitle, description, logo
}`);
