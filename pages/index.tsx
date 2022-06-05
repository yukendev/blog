import { NextPage } from 'next';
import { client } from "../libs/client";
import { IBlog } from '../types'

type HomeProps = {
  blogs: IBlog[]
}

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <>
      <h1>ブログタイトル</h1>
      <ul>
        {
          blogs.map((blog) => {
            return <li>{blog.title}</li>
          })
        }
      </ul>
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
