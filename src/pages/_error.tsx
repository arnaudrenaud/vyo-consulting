import { getPageLayoutData } from "@/helpers/getPageLayoutData";

export async function getStaticProps() {
  return {
    props: await getPageLayoutData(),
  };
}

export default function NotFoundPage() {
  return <h1>Page introuvable</h1>;
}
