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
  ],
});
