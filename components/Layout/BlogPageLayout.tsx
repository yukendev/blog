import Head from "next/head";

// Layout for blogs/[slug].tsx(blog page)
export const BlogPageLayout = (props): JSX.Element => {
  const { children, blog } = props;
  const url = `https://www.yukendev.com/${blog.slug}`;
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={blog.description} />
        <meta property="og:description" content={blog.description} />
      </Head>
      {children}
    </>
  );
};
