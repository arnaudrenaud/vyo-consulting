import { PageLayout } from "@/components/PageLayout";
import { PageLayoutData } from "@/helpers/getPageLayoutData";
import { urlFor } from "@/sanity/lib/image";
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

  const logo = pageProps.metadata.logo
    ? urlFor(pageProps.metadata.logo).url()
    : null;

  return (
    <>
      <Head>
        <title>{pageProps.metadata.title}</title>
        <meta
          name="description"
          content={pageProps.metadata.description || ""}
          key="title"
        />

        {logo && <meta name="image" property="og:image" content={logo} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://example.com/images/thumbnail.jpg"
        />
      </Head>

      <PageLayout {...pageProps}>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
