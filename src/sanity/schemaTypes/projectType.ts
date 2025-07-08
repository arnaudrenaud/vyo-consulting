import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "shortTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "fullTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientLogo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "context",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "goals",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "realizations",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "achievements",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "team",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "technology",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "impact",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "expertises",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "expertise" } })],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "collaborators",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "collaborator" },
        }),
      ],
    }),
  ],
});
