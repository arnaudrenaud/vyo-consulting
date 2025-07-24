import { client } from "@/sanity/lib/client";
import { LEGAL_NOTICE_PAGE_QUERY } from "@/sanity/lib/queries";
import {
  LEGAL_NOTICE_PAGE_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import Head from "next/head";
import { RichContent } from "@/components/utils/RichContent";

export async function getStaticProps() {
  const content = await client.fetch(LEGAL_NOTICE_PAGE_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content },
  };
}

const LegalNoticePage = ({
  content,
  metadata,
}: {
  content: LEGAL_NOTICE_PAGE_QUERYResult;
  metadata: METADATA_QUERYResult;
}) => {
  if (!metadata) {
    throw new Error("Metadata is undefined.");
  }
  if (!content) {
    throw new Error("Legal notice page content undefined.");
  }

  return (
    <>
      <Head>
        <title>{content.metaTitle || metadata.title}</title>
        <meta
          name="description"
          content={content.metaDescription || metadata.description || ""}
          key="title"
        />
      </Head>

      <div>
        <RichContent value={content.content} />
      </div>
    </>
  );
};

export default LegalNoticePage;
