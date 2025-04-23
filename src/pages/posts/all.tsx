import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";

import { PATHS } from "@/lib/urls";
import { ALL_POSTS_QUERYResult } from "@/sanity/types";

export async function getStaticProps() {
  const posts = await client.fetch(ALL_POSTS_QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function PostsPage({ posts }: { posts: ALL_POSTS_QUERYResult }) {
  return (
    <>
      <Link href={PATHS.HOME}>Home</Link>
      <h1>All posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post._id}>
            {post.title} (
            {post.categories?.map((category) => category.title).join(", ")})
          </li>
        ))}
      </ol>
    </>
  );
}
