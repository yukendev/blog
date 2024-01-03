import { Blog } from '../types';
import { BlogListWrapper } from '@components/organisms/BlogListWrapper';
import { CategoryList } from '@components/organisms/CategoryList';
import { getSortedPostsData } from '../libs/posts';
import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import { Layout } from '@components/Layout/Layout';
import { usePageViewLine } from 'hooks/usePageViewLine';

type HomeProps = {
  blogs: Blog[];
};

const Home: NextPageWithLayout<HomeProps> = ({ blogs }) => {
  usePageViewLine('トップページ');
  return (
    <div className='mx-auto w-11/12 max-w-5xl'>
      <CategoryList />
      <h1 className='text-xl text-myTextColor font-bold my-10'>記事一覧</h1>
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
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

export default Home;
