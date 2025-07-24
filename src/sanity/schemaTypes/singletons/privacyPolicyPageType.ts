import { defineType, defineField } from "sanity";

export const privacyPolicyPageType = defineType({
  name: "privacyPolicyPage",
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
