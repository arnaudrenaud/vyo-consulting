import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);

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
