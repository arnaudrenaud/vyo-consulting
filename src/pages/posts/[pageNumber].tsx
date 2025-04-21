import { client } from "@/sanity/lib/client";
import { POST_COUNT_QUERY, POST_PAGE_QUERY } from "@/sanity/lib/queries";
import { POST_PAGE_QUERYResult } from "@/sanity/types";

const PAGE_SIZE = 2;

// Generate pages depending on total post count: /posts/1.html, /posts/2.html…
export async function getStaticPaths() {
  const totalPostCount = await client.fetch(POST_COUNT_QUERY);
  const totalPageCount = Math.ceil(totalPostCount / PAGE_SIZE);

  const paths = Array.from({ length: totalPageCount }, (_, i) => ({
    params: { pageNumber: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { pageNumber: string };
}) {
  const pageNumber = parseInt(params.pageNumber) || 1;
  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const posts = await client.fetch(POST_PAGE_QUERY, { startIndex, endIndex });
  return {
    props: { pageNumber, posts },
  };
}

export default function PostsPage({
  pageNumber,
  posts,
}: {
  pageNumber: number;
  posts: POST_PAGE_QUERYResult;
}) {
  return (
    <>
      <h1>Posts (page {pageNumber}):</h1>
      <ol>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
}
