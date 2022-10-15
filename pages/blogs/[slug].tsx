import type { ReactElement } from 'react';
import { Blog } from '../../types';
import { BlogContentWrapper } from '../../components/BlogContentWrapper';
import { getSortedPostsData, getPostsBySlug } from '../../libs/posts';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '../../components/Layout/Layout';
import { BlogPageLayout } from '../../components/Layout/BlogPageLayout';

type BlogProps = {
  blog: Blog;
};

const Blog: NextPageWithLayout<BlogProps> = ({ blog }) => {
  return <BlogContentWrapper blog={blog} />;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  const { blog } = page.props;
  return (
    <Layout>
      <BlogPageLayout blog={blog}>{page}</BlogPageLayout>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const data = await getSortedPostsData();

  const paths = data.map((data) => ({
    params: {
      slug: data.slug,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const targetPost = await getPostsBySlug(slug);

  return {
    props: {
      blog: targetPost,
    },
  };
};

export default Blog;
