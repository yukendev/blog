import Head from "next/head";
import { metaDataForBlog } from "../../data/meta";

const { title, description } = metaDataForBlog;

// Layout for index.tsx(top page)
export const TopPageLayout = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content="https://www.yukendev.com/" />
        <meta property="og:title" content="ぼうず屋本舗" />
        <meta property="og:description" content={title} />
      </Head>
      {children}
    </>
  );
};
