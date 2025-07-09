import { SOLUTIONS_IN_ORDER } from "@/helpers/constants";
import { SOLUTION_THEME_COLOR } from "@/helpers/theme";
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
export function getSolutionThemeColor(slug: Slug) {
  return SOLUTION_THEME_COLOR[slug.current] || SOLUTION_THEME_COLOR.default;
}
