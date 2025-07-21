import { defineType, defineField } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
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
    defineField({
      name: "contactButtonLabel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "historyTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "history",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),

    defineField({
      name: "metaTitle",
      type: "string",
      description:
        '[Meta] Non affiché dans la page, remplace le \"Title\" défini dans "Metadata".',
    }),
    defineField({
      name: "metaDescription",
      type: "string",
      description:
        '[Meta] Non affiché dans la page, remplace la \"Description\" définie dans "Metadata".',
    }),
  ],
});
