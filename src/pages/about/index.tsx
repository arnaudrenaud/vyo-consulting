import HeroSection from "@/components/about/HeroSection";
import { client } from "@/sanity/lib/client";
// A changer en "about" pour la page "À propos" ABOUTPAGE_QUERY && ABOUTPAGE_QUERYResult
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import { ABOUT_PAGE_QUERYResult } from "@/sanity/types";
import Values from "@/components/about/Values";
import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export async function getStaticProps() {
  const content = await client.fetch(ABOUT_PAGE_QUERY);

  return {
    props: { ...(await getPageLayoutData()), content },
  };
}

const About = ({ content }: { content: ABOUT_PAGE_QUERYResult }) => {
  if (!content) {
    throw new Error("About page content undefined.");
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection
        heroTitle={content.heroTitle}
        heroParagraph={content.heroParagraph}
      />
      <Values />
    </section>
  );
};

export default About;
