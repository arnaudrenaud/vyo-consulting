import { client } from "@/sanity/lib/client";
import { ALL_EXPERTISES_QUERY, METADATA_QUERY } from "@/sanity/lib/queries";
import {
  ALL_EXPERTISES_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";

export type PageLayoutData = {
  metadata: METADATA_QUERYResult;
  expertises: ALL_EXPERTISES_QUERYResult;
};

export async function getPageLayoutData(): Promise<PageLayoutData> {
  const metadata = await client.fetch(METADATA_QUERY);
  const expertises = await client.fetch(ALL_EXPERTISES_QUERY);
  return { metadata, expertises };
}
