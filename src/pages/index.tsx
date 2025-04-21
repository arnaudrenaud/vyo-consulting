import { client } from "@/sanity/lib/client";
import { AUTHORS_QUERY, HOME_PAGE_POSTS_QUERY } from "@/sanity/lib/queries";
import {
  AUTHORS_QUERYResult,
  HOME_PAGE_POSTS_QUERYResult,
} from "@/sanity/types";

export async function getStaticProps() {
  const posts = await client.fetch(HOME_PAGE_POSTS_QUERY);
  const authors = await client.fetch(AUTHORS_QUERY);
  return {
    props: { posts, authors },
  };
}

export default function Home({
  authors,
  posts,
}: {
  posts: HOME_PAGE_POSTS_QUERYResult;
  authors: AUTHORS_QUERYResult;
}) {
  return (
    <>
      <h1>Posts:</h1>
      <ol>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ol>
      <hr />
      <h2>Authors:</h2>
      <ol>
        {authors.map((author) => (
          <li key={author._id}>
            {author.name} ({author.dateOfBirth})
          </li>
        ))}
      </ol>
    </>
  );
}
