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
        "Titre utilisé par le navigateur (souvent pour nommer l'onglet) et pour le référencement par les moteurs, non affiché dans la page. Utilisé sur chaque page du site sauf si redéfini spécifiquement pour la page.",
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Description utilisée principalement pour le référencement par les moteurs, et pour l'aperçu lors du partage d'une page.",
    }),
    defineField({
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Affiché dans l'en-tête de la page.",
    }),
    defineField({
      name: "ogLogoWide",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description:
        "Affiché dans les cartes de prévisualisation (LinkedIn, Facebook, etc.) – taille recommandée : 1200x630px.",
    }),

    defineField({
      name: "solutionsIntroduction",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),
    defineField({
      name: "projectsIntroduction",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    }),
  ],
});
