import { use } from "react";

function FetchedPostsList({ fetchedPosts }) {
  const posts = use(fetchedPosts);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default FetchedPostsList;
