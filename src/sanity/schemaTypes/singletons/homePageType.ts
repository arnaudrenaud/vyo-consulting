import { defineType, defineField } from "sanity";

export const homePageType = defineType({
  name: "homePage",
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
      name: "introduction",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
      description:
        "ℹ️ Pour sauter une ligne entre deux paragraphes, appuyer sur Shift+Entrée (valable sur tous les champs de bloc de texte).",
    }),
    defineField({
      name: "process",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),
  ],
});
