import { getPageLayoutData } from "@/helpers/getPageLayoutData";
import Contact from "@/components/Contact";
import SolutionsSection from "@/components/SolutionsSection";
import BannerNumber from "@/components/about/BannerNumber";
import ChoiceSection from "@/components/ChoiceSection";

import { ALL_EXPERTISES_QUERYResult } from "@/sanity/types";

export async function getStaticProps() {
  return {
    props: { ...(await getPageLayoutData()) },
  };
}

const ContactPage = ({
  expertises,
}: {
  expertises: ALL_EXPERTISES_QUERYResult;
}) => {
  return (
    <section className="relative">
      <Contact />
      <SolutionsSection expertises={expertises} showDescription />
      <BannerNumber />
      <ChoiceSection />
      <div className="absolute bg-[#DCFCE7] h-[458px] w-[458px] block z-[-1] top-[1250px] -right-32 rounded-full" />
      <div className="absolute bg-[#BBF7D0] h-[308px] w-[308px] block z-[-1] top-[3000px] right-8 rounded-full" />
    </section>
  );
};

export default ContactPage;
