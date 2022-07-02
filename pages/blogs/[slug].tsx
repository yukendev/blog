import { NextPage } from "next";
import { Blog } from "../../types";
import { BlogContentWrapper } from "../../components/BlogContentWrapper";
import { getSortedPostsData, getPostsBySlug } from "../../libs/posts";

type BlogProps = {
  blog: Blog;
};

const Blog: NextPage<BlogProps> = ({ blog }) => {
  return <BlogContentWrapper blog={blog} />;
};

export const getStaticPaths = async () => {
  const data = await getSortedPostsData();

  const paths = data.map((data) => ({
    params: {
      slug: data.slug,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const targetPost = await getPostsBySlug(slug);

  return {
    props: {
      blog: targetPost,
    },
  };
};

export default Blog;
