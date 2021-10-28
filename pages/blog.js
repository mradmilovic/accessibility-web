import { getAllPosts } from "../utils";
import * as Sentry from "@sentry/nextjs";

const Blog = ({ posts, time }) => {
  return (
    <div>
      Time: {time}
      {posts.map((p) => (
        <div>{p.data.title}</div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  Sentry.captureException(new Error(process.cwd()));
  const posts = getAllPosts();
  const time = new Date();
  return {
    props: {
      time: time.toISOString(),
      posts,
    },
    notFound: false,
    revalidate: 60,
  };
};

export default Blog;
