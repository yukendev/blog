import { NextPage } from 'next';
import { client } from "../libs/client";
import { IBlog } from '../types';
import { BlogListWrapper } from '../components/BlogListWrapper';

type HomeProps = {
  blogs: IBlog[]
}

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <>
      <BlogListWrapper blogs={blogs}/>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
