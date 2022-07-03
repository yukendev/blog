import { Blog } from "../types";
import { BlogListWrapper } from "../components/BlogListWrapper";
import { CategoryList } from "../components/CategoryList";
import { getSortedPostsData } from "../libs/posts";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { Layout } from "../components/Layout/Layout";
import { TopPageLayout } from "../components/Layout/TopPageLayout";

type HomeProps = {
  blogs: Blog[];
};

const Home: NextPageWithLayout<HomeProps> = ({ blogs }) => {
  return (
    <div className="mx-auto w-11/12 max-w-5xl">
      <CategoryList />
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <TopPageLayout>{page}</TopPageLayout>
    </Layout>
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
