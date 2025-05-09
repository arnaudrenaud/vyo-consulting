import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";
import { globalType } from "./globalType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [expertiseType, globalType],
};
