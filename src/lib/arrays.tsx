export type SortBy = "ALPHA_DESC" | "ALPHA_ASC";

export function getSortedObjects<T extends Record<string, any>>(
  array: T[],
  { key, sortBy }: { key: string; sortBy: SortBy }
) {
  if (array.length && !Object.hasOwn(array[0], key)) {
    throw new Error(
      `Cannot sort array of elements that do not have attribute "${key}".`
    );
  }

  return sortBy === "ALPHA_ASC"
    ? [...array].sort((e1: T, e2: T) => (e1[key] < e2[key] ? -1 : 1))
    : [...array].sort((e1: T, e2: T) => (e1[key] > e2[key] ? -1 : 1));
}
