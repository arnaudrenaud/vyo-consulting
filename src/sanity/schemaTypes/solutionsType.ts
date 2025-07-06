import { defineField, defineType } from "sanity";

export const solutionsType = defineType({
  name: "solutions",
  title: "Solutions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "professions",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
