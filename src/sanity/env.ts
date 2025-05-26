export const apiVersion = "2025-04-14";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET",
);

export const hostId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_HOST,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_HOST",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
