// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const LAST_POST_QUERY = defineQuery(`*[_type == "post"]
  | order(_createdAt desc)[0]{
  _id, title, slug
}`);

export const ALL_POSTS_QUERY = defineQuery(`*[_type == "post"]
  | order(_createdAt desc){
  _id, title, slug, categories[]->
}`);

export const POST_COUNT_QUERY = defineQuery(`count(*[_type == "post"])`);

export const POST_PAGE_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][$startIndex...$endIndex]{
  _id, title, slug
}`);

export const AUTHORS_QUERY = defineQuery(`*[_type == "author"]`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
