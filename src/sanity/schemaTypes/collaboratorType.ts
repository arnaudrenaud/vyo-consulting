import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const collaboratorType = defineType({
  name: "collaborator",
  title: "Collaborator",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "firstName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jobTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profilePicture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      jobTitle: "jobTitle",
      media: "profilePicture",
    },
    prepare(selection) {
      const { firstName, lastName, jobTitle, media } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: jobTitle,
        media,
      };
    },
  },
});
