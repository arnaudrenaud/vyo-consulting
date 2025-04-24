import { Header } from "@/components/Header";
import { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-12 p-4">{children}</main>
    </>
  );
}
