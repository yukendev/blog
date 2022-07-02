import { NextPage } from "next";
import { Blog } from "../types";
import { BlogListWrapper } from "../components/BlogListWrapper";
import { CategoryList } from "../components/CategoryList";
import Head from "next/head";
import { getSortedPostsData } from "../libs/posts";

type HomeProps = {
  blogs: Blog[];
};

const blogDescription =
  "てずかが学んだことを個人的にアウトプットするだけのブログです。よろしくお願いします。";

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <div className="mx-auto w-11/12 max-w-5xl">
      <Head>
        <title>てずかのブログ</title>
        <meta name="description" content={blogDescription} />
        <meta property="og:url" content="https://www.yukendev.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="てずかのブログ" />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:site_name" content="てずかのブログ" />
        <meta property="og:image" content="https://www.yukendev.com/ogp.png" />
      </Head>
      <CategoryList />
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};

export const getStaticProps = async () => {
  // 全ての記事を日付順で取得

  const data = await getSortedPostsData();

  return {
    props: {
      blogs: data,
    },
  };
};

export default Home;
