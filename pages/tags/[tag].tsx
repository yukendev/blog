import type { ReactElement } from 'react';
import { Blog } from '../../types';
import { Tag } from '../../data/tags/type';
import { tags } from '../../data/tags/tags';
import { TagContentWrapper } from '../../components/TagContentWrapper';
import { getPostsByTags } from '../../libs/posts';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '../../components/Layout/Layout';

type TagPageProps = {
  tag: Tag;
  blogs: Blog[];
};

const TagPage: NextPageWithLayout<TagPageProps> = ({ tag, blogs }) => {
  return <TagContentWrapper tag={tag} blogs={blogs} />;
};

TagPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const paths = tags.map((tag) => ({
    params: {
      tag,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const tag = params.tag;
  const blogs = await getPostsByTags(tag);
  return {
    props: {
      tag,
      blogs,
    },
  };
};

export default TagPage;
