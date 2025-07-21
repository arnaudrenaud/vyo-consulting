import { defineType, defineField } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),
    defineField({
      name: "heroParagraph",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),
  ],
});
