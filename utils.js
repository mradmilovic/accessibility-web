import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import take from "lodash/take";

const POSTS_PATH_STR = "posts";
const getPostsPath = () => path.join(process.cwd(), POSTS_PATH_STR);

export const postFilePaths = fs
  .readdirSync(getPostsPath())
  .filter((path) => /\.mdx?$/.test(path));

export const getPostData = async (slug) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(POSTS_PATH_STR, slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    frontMatter,
    slug,
    mdxSource,
  };
};

export const getAllPosts = () => {
  console.log(postFilePaths);
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(getPostsPath(), filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts
    .filter((p) => p.data.published)
    .sort((first, second) =>
      second.data.publishedDate > first.data.publishedDate ? 1 : -1
    );
};

export const getLatestPosts = () => {
  const posts = getAllPosts();
  return take(posts, 4);
};

export const getLatestPaths = () => {
  const posts = getAllPosts();
  return take(posts, 4).map((post) => ({
    params: {
      slug: post.data.slug,
    },
  }));
};
