import { SOLUTIONS_IN_ORDER } from "@/helpers/constants";
import { SOLUTION_THEME_COLOR } from "@/helpers/theme";
import { Slug } from "@/sanity/types";

export function getSolutionsInOrder<T extends { slug: Slug }>(
  solutions: T[],
): T[] {
  return [...solutions].sort((a, b) => {
    const orderA = SOLUTIONS_IN_ORDER.indexOf(a.slug.current);
    const orderB = SOLUTIONS_IN_ORDER.indexOf(b.slug.current);

    if (orderA === -1 && orderB === -1) return 0;
    if (orderA === -1) return 1;
    if (orderB === -1) return -1;

    return orderA - orderB;
  });
}
export function getSolutionThemeColor(slug: Slug) {
  return SOLUTION_THEME_COLOR[slug.current] || SOLUTION_THEME_COLOR.default;
}
