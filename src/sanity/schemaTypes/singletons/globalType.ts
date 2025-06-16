import { CircleIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const globalType = defineType({
  name: "metadata",
  title: "Metadata",
  type: "document",
  icon: CircleIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Titre utilisé par le navigateur (souvent pour nommer l'onglet), non affiché dans la page.",
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
