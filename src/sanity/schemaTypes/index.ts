import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";
import { projectType } from "./projectType";
import { collaboratorType } from "./collaboratorType";

import { globalType } from "./singletons/globalType";
import { homePageType } from "./singletons/homePageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    expertiseType,
    collaboratorType,
    projectType,
    globalType,
    homePageType,
  ],
};
