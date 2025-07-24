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
const singletonTypes = new Set([
  "metadata",
  "homePage",
  "projectsPage",
  "aboutPage",
  "legalNoticePage",
  "privacyPolicyPage",
]);

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
            S.listItem()
              .title("Metadata")
              .id("metadata")
              .child(
                S.document().schemaType("metadata").documentId("metadata"),
              ),

            S.listItem()
              .title("Page d'accueil")
              .id("homePage")
              .child(
                S.document().schemaType("homePage").documentId("homePage"),
              ),
            S.listItem()
              .title('Page \"Projets\"')
              .id("projectsPage")
              .child(
                S.document()
                  .schemaType("projectsPage")
                  .documentId("projectsPage"),
              ),
            S.listItem()
              .title('Page \"À propos\"')
              .id("aboutPage")
              .child(
                S.document().schemaType("aboutPage").documentId("aboutPage"),
              ),
            S.listItem()
              .title('Page \"Mentions légales\"')
              .id("legalNoticePage")
              .child(
                S.document()
                  .schemaType("legalNoticePage")
                  .documentId("legalNoticePage"),
              ),
            S.listItem()
              .title('Page \"Politique de confidentialité\"')
              .id("privacyPolicyPage")
              .child(
                S.document()
                  .schemaType("privacyPolicyPage")
                  .documentId("privacyPolicyPage"),
              ),

            // Regular document types
            S.documentTypeListItem("expertise").title("Expertise"),
            S.documentTypeListItem("collaborator").title("Collaborator"),
            S.documentTypeListItem("project").title("Project"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
