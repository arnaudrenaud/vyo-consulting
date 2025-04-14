import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "@/sanity/types";

export async function getStaticProps() {
  const posts = await client.fetch(POSTS_QUERY);
  return {
    props: { posts },
  };
}

export default function Home({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <>
      <h1>Posts:</h1>
      <ol>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ol>
    </>
  );
}
