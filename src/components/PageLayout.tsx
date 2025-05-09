import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-12 mb-20 p-4 space-y-6 flex flex-col min-h-[calc(100vh-70px)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
