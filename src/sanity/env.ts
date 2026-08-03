export const apiVersion = "2025-04-14";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET ||
    process.env.SANITY_STUDIO_DATASET ||
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    process.env.SANITY_DATASET ||
    "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET",
);

export const hostId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_HOST ||
    process.env.SANITY_STUDIO_HOST ||
    process.env.NEXT_PUBLIC_SANITY_HOST ||
    process.env.SANITY_HOST ||
    "vyo-consulting",
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_HOST",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
