import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";
import { collaboratorType } from "./collaboratorType";
import { jobType } from "./jobType";
import { projectType } from "./projectType";

import { globalType } from "./singletons/globalType";
import { homePageType } from "./singletons/homePageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    expertiseType,
    collaboratorType,
    jobType,
    projectType,
    globalType,
    homePageType,
  ],
};
