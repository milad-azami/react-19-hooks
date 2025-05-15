import { use } from "react";
import { DataContext } from "../../context/DataProvider";

function FetchedPostsList({ fetchedPosts }) {
  const posts = use(fetchedPosts);
  const data = use(DataContext);
  console.log(data);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default FetchedPostsList;
