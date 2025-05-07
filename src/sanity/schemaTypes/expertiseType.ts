import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const expertiseType = defineType({
  name: "expertise",
  title: "Expertise",
  type: "document",
  icon: PresentationIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "shortDescription",
      type: "text",
    }),
    defineField({
      name: "longDescription",
      type: "text",
    }),
  ],
});
