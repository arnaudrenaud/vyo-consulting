import { type SchemaTypeDefinition } from "sanity";

import { expertiseType } from "./expertiseType";
import { collaboratorType } from "./collaboratorType";
import { jobType } from "./jobType";
import { projectType } from "./projectType";

import { globalType } from "./singletons/globalType";
import { homePageType } from "./singletons/homePageType";
import { projectsPageType } from "./singletons/projectsPageType";
import { aboutPageType } from "./singletons/aboutPageType";
import { legalNoticePageType } from "./singletons/legalNoticePageType";
import { privacyPolicyPageType } from "./singletons/privacyPolicyPageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    expertiseType,
    collaboratorType,
    jobType,
    projectType,
    globalType,
    homePageType,
    projectsPageType,
    aboutPageType,
    legalNoticePageType,
    privacyPolicyPageType,
  ],
};
