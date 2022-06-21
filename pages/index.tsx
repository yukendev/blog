import { NextPage } from 'next';
import { client } from "../libs/client";
import { IBlog } from '../types';
import { BlogListWrapper } from '../components/BlogListWrapper';
import { CategoryList } from '../components/CategoryList';
import Head from 'next/head'

type HomeProps = {
  blogs: IBlog[]
}

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <div className='mx-auto w-11/12 md:w-8/12'>
      <Head>
        <title>てずかのブログ</title>
      </Head>
      <CategoryList/>
      <BlogListWrapper blogs={blogs}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
