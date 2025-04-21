import { PATHS } from "@/lib/urls";
import { client } from "@/sanity/lib/client";
import { POST_COUNT_QUERY, POST_PAGE_QUERY } from "@/sanity/lib/queries";
import { POST_PAGE_QUERYResult } from "@/sanity/types";
import Link from "next/link";

const PAGE_SIZE = 2;

async function getTotalPageCount() {
  const totalPostCount = await client.fetch(POST_COUNT_QUERY);
  const totalPageCount = Math.ceil(totalPostCount / PAGE_SIZE);
  return totalPageCount;
}

// Generate pages depending on total post count: /posts/1.html, /posts/2.html…
export async function getStaticPaths() {
  const totalPageCount = await getTotalPageCount();

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
    props: {
      pageNumber,
      posts,
      previousPageNumber: pageNumber > 1 ? pageNumber - 1 : null,
      nextPageNumber:
        pageNumber < (await getTotalPageCount()) ? pageNumber + 1 : null,
    },
  };
}

export default function PostsPage({
  pageNumber,
  posts,
  previousPageNumber,
  nextPageNumber,
}: {
  pageNumber: number;
  posts: POST_PAGE_QUERYResult;
  previousPageNumber: number;
  nextPageNumber: number;
}) {
  return (
    <>
      <Link href={PATHS.HOME}>Home</Link>
      <h1>Posts (page {pageNumber}):</h1>
      <ol>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ol>
      {previousPageNumber ? (
        <Link href={`${PATHS.POSTS}/${previousPageNumber}`}>Previous page</Link>
      ) : null}
      {nextPageNumber ? (
        <Link href={`${PATHS.POSTS}/${nextPageNumber}`}>Next page</Link>
      ) : null}
    </>
  );
}
