import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [expertiseType],
};
