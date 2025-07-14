/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";
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
  return (
    <div className={`${GeistSans.className} relative`}>
      <Header metadata={metadata} expertises={expertises} />
      <main className="relative max-md:overflow-x-hidden mt-24 mb-8 md:px-12 px-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)] xl:max-w-[85%] xl:mx-auto">
        {children}
        {/* <div className="absolute bg-[#DCFCE7] h-[228px] w-[228px] block z-[-1] xl:top-[31.5rem] lg:top-[42rem] top-[60rem] -right-[3rem] rounded-full" /> */}
      </main>
      {metadata && <Footer metadata={metadata} />}
      <img
        src="/icones/circle-green.png"
        alt="Circle green"
        className="absolute max-[500px]:w-[250px]! max-md:w-[360px] w-[458px] bottom-20 max-md:bottom-50 right-0 z-[-1]"
      />
    </div>
  );
}
