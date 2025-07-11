import HeroSection from "@/components/about/HeroSection";
import { client } from "@/sanity/lib/client";
// A changer en "about" pour la page "À propos" ABOUTPAGE_QUERY && ABOUTPAGE_QUERYResult
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";
import { HOMEPAGE_QUERYResult } from "@/sanity/types";
import Values from "@/components/about/Values";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export async function getStaticProps() {
  const content = await client.fetch(HOMEPAGE_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content },
  };
}

const About = ({ content }: { content: HOMEPAGE_QUERYResult }) => {
  if (!content) {
    throw new Error("Homepage content undefined.");
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
      <Values />
    </section>
  );
};

export default About;
