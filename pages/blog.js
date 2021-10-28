import { getAllPosts } from "../utils";

const Blog = ({ posts }) => {
  return (
    <div>
      {posts.map((p) => (
        <div>{p.data.title}</div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  Sentry.captureException(new Error(process.cwd()));
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Blog;
