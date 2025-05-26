import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
import { METADATA_QUERYResult } from "@/sanity/types";

export function PageLayout({
  children,
  metadata,
}: {
  children: ReactNode;
  metadata: METADATA_QUERYResult;
}) {
  return (
    <>
      <Header metadata={metadata} />
      <main className="mt-12 mb-20 p-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
