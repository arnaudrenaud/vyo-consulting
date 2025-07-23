/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { useRouter } from "next/router";

import {
  ALL_EXPERTISES_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";
import { GeistSans } from "geist/font/sans";

export function PageLayout({
  children,
  metadata,
  expertises,
}: {
  children: ReactNode;
  metadata: METADATA_QUERYResult;
  expertises: ALL_EXPERTISES_QUERYResult;
}) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={`${GeistSans.className} relative`}>
      <Header metadata={metadata} expertises={expertises} />
      <main
        className={`${
          currentPath === "/projects" ? "mt-19" : "mt-24"
        } relative mb-8 md:px-12 px-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)] xl:max-w-[85%] xl:mx-auto`}
      >
        {children}
      </main>
      {metadata && <Footer metadata={metadata} />}
      {currentPath !== "/contact" && (
        <img
          src="/icones/circle-green.png"
          alt="Circle green"
          className="absolute max-[500px]:w-[250px]! max-md:w-[360px] w-[458px] bottom-20 max-md:bottom-50 right-0 z-[-1]"
        />
      )}
      <Toaster richColors />
    </div>
  );
}
