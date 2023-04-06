import { NextSeo } from 'next-seo';

// Layout for blogs/[slug].tsx(blog page)
export const BlogPageLayout = (props): JSX.Element => {
  const { children, blog } = props;
  const url = `https://www.yukendev.com/${blog.slug}`;
  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.description}
        openGraph={{
          url,
          title: blog.title,
          description: blog.description,
        }}
      />
      {children}
    </>
  );
};
