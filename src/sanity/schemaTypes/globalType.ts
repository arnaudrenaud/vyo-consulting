import { ComposeIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const globalType = defineType({
  name: "metaData",
  title: "MetaData",
  type: "document",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
    }),
  ],
});
