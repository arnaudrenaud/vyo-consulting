import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
import { METADATA_QUERYResult } from "@/sanity/types";
import { GeistSans } from "geist/font/sans";

export function PageLayout({
  children,
  metadata,
}: {
  children: ReactNode;
  metadata: METADATA_QUERYResult;
}) {
  return (
    <div className={GeistSans.className}>
      <Header metadata={metadata} />
      <main className="mt-28 mb-8 md:px-12 px-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)] xl:max-w-11/12 xl:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
