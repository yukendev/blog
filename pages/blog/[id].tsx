import { NextPage } from "next";
import { client } from "../../libs/client";
import { IBlog } from "../../types";
import { BlogContentWrapper } from '../../components/BlogContentWrapper';
import { converMarkdownToHtml } from '../../util/convert-markdown';

type BlogProps = {
  blog: IBlog
}

const Blog: NextPage<BlogProps> = ({ blog }) => {
  return (
    <BlogContentWrapper blog={blog}/>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  const convertedBody = await converMarkdownToHtml(data.body)

  // Markdown形式の中身をHTML形式に変換されたものに入れ替える
  data.body = convertedBody;

  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;