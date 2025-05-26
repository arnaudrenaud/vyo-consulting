import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode, useEffect } from "react";
import { METADATA_QUERYResult } from "@/sanity/types";

export function PageLayout({
  children,
  metadata,
}: {
  children: ReactNode;
  metadata: METADATA_QUERYResult;
}) {
  useEffect(() => {
    // Always display the top of the page when navigating
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header metadata={metadata} />
      <main className="mt-28 mb-20 md:px-12 px-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)] xl:max-w-11/12 xl:mx-auto text-justify">
        {children}
      </main>
      <Footer />
    </>
  );
}
