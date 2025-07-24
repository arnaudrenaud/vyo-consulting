// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const METADATA_QUERY = defineQuery(`*[_type == "metadata"][0]{
  title, subtitle, description, logo, ogLogoWide
}`);

export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homePage"][0]`);
export const ABOUT_PAGE_QUERY = defineQuery(`*[_type == "aboutPage"][0]`);
export const PROJECTS_PAGE_QUERY = defineQuery(`*[_type == "projectsPage"][0]`);
export const LEGAL_NOTICE_PAGE_QUERY = defineQuery(
  `*[_type == "legalNoticePage"][0]`,
);
export const PRIVACY_POLICY_PAGE_QUERY = defineQuery(
  `*[_type == "privacyPolicyPage"][0]`,
);

export const ALL_EXPERTISES_QUERY = defineQuery(
  `*[_type == "expertise"]| order(_createdAt asc)`,
);

export const EXPERTISE_DETAILS_QUERY = defineQuery(
  `*[_type == "expertise" && slug.current == $slug][0]`,
);

export const ALL_PROJECTS_QUERY = defineQuery(
  `*[_type == "project"]| order(_createdAt desc){_id, slug, shortTitle, shortDescription, fullTitle, client, clientLogo, context, goals, realizations, achievements, team, technology, impact, realizationScreenshots, document, expertises[]->, collaborators[]->}`,
);
