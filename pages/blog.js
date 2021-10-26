import { getAllPosts } from "../utils";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((p) => (
        <div>{p.data.title}</div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
