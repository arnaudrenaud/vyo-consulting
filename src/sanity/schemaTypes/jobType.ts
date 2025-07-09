import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Job",
  type: "object",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "levels",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      name: "name",
      levels: "levels",
    },
    prepare(selection) {
      const { name, levels } = selection;
      return {
        title: name,
        subtitle: (levels ?? []).join(", "),
      };
    },
  },
});
