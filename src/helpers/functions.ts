import { SOLUTIONS_IN_ORDER } from "@/helpers/constants";
import { Slug } from "@/sanity/types";

export function getSolutionsInOrder<T extends { slug: Slug }>(
  solutions: T[],
): T[] {
  return SOLUTIONS_IN_ORDER.map((_slug) => {
    const solution = solutions.find(({ slug }) => slug.current === _slug);
    if (!solution) {
      throw new Error(
        `Solution (or expertise) ${_slug} not found – maybe it was not added in CMS.`,
      );
    }
    return solution;
  });
}
