import { PageLayout } from "@/components/PageLayout";
import { PageLayoutData } from "@/helpers/getPageLayoutData";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({
  Component,
  pageProps,
}: AppProps<PageLayoutData>) {
  if (!pageProps.metadata) {
    throw new Error("Metadata is undefined.");
  }

  return (
    <>
      <Head>
        <title>{pageProps.metadata.title}</title>
        <meta
          property="og:title"
          content={pageProps.metadata.description || ""}
          key="title"
        />
      </Head>

      <PageLayout {...pageProps}>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
