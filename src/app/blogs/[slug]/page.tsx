import { BlogPage } from '@components/pages/Blog';
import { getPostsBySlug, getSortedPostsData } from 'src/libs/posts';
import { Metadata } from 'next/types';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const blog = await getPostsBySlug(params.slug);

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      url: `https://www.yukendev.com/${blog?.slug}`,
      title: blog?.title,
      description: blog?.description,
    },
  };
};

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPage slug={params.slug} />;
}

export const generateStaticParams = async () => {
  const data = await getSortedPostsData();

  return data.map((post) => ({
    slug: post.slug,
  }));
};
