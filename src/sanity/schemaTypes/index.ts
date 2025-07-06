import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";
import { globalType } from "./singletons/globalType";
import { homePageType } from "./singletons/homePageType";
import { solutionsType } from "./solutionsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [expertiseType, globalType, homePageType, solutionsType],
};
