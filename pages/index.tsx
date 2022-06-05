import { NextPage } from 'next';
import { client } from "../libs/client";

type HomePageProps = {
  blog
}

const Home: NextPage = () => {
  return (
    <h1>ブログタイトル</h1>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home;
