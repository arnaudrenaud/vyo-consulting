import { defineType, defineField } from "sanity";

export const legalNoticePageType = defineType({
  name: "legalNoticePage",
  type: "document",
  fields: [
    defineField({
      name: "content",
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
