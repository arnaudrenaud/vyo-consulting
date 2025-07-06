"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
// import { structure } from "./src/sanity/structure";

// Define the singleton document types
const singletonTypes = new Set(["metadata", "homePage"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder

  // Filter out singleton types from the global “New document” menu options
  schema: {
    ...schema,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  // document: {
  //   // For singleton types, filter out actions that are not explicitly included
  //   // in the `singletonActions` list defined above
  //   actions: (input, context) =>
  //     singletonTypes.has(context.schemaType)
  //       ? input.filter(({ action }) => action && singletonActions.has(action))
  //       : input,
  // },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title("Metadata").id("metadata").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("metadata").documentId("metadata"),
            ),

            S.listItem().title("Page d'accueil").id("homePage").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("homePage").documentId("homePage"),
            ),

            // Regular document types
            S.documentTypeListItem("expertise").title("Expertise"),
            S.documentTypeListItem("solutions").title("Solutions"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
