export type SortBy = "ALPHA_DESC" | "ALPHA_ASC";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSortedObjects<T extends Record<string, any>>(
  objects: T[],
  { key, sortBy }: { key: string; sortBy: SortBy }
) {
  if (objects.length && !Object.hasOwn(objects[0], key)) {
    throw new Error(
      `Cannot sort array of elements that do not have attribute "${key}".`
    );
  }

  return sortBy === "ALPHA_ASC"
    ? [...objects].sort((e1: T, e2: T) => (e1[key] < e2[key] ? -1 : 1))
    : [...objects].sort((e1: T, e2: T) => (e1[key] > e2[key] ? -1 : 1));
}
