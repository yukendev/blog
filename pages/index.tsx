import { Blog } from '../types';
import { getSortedPostsData } from '../libs/posts';
import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import { Layout } from '@components/Layout/Layout';
import { TopPage } from '@components/pages/TopPage';

type TopProps = {
  blogs: Blog[];
};

const Top: NextPageWithLayout<TopProps> = ({ blogs }) => {
  return <TopPage blogs={blogs} />;
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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

export default Top;
