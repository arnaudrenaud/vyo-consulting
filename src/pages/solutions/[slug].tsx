import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import { SOLUTION_QUERY } from "@/sanity/lib/queries";
import { SOLUTION_QUERYResult } from "@/sanity/types";

type Props = {
  data: SOLUTION_QUERYResult;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: { current: string } }[] = await client.fetch(`
    *[_type == "solutions" && defined(slug.current)]{
      slug
    }
  `);

  return {
    paths: slugs.map((item) => ({
      params: { slug: item.slug.current },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const data = (await client.fetch(SOLUTION_QUERY, {
    slug,
  })) as SOLUTION_QUERYResult;

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
  };
};

export default function SolutionPage({ data }: Props) {
  //   const { title, slug, projects, professions } = data;
  const router = useRouter();

  //   console.log("data in SolutionPage:", title, slug, projects, professions);
  console.log("data in SolutionPage:", data);

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return <h1>Solutions is working !!!</h1>;
}
