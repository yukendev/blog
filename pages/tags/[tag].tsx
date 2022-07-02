import { NextPage } from "next";
import { Blog } from "../../types";
import { Tag } from "../../data/tags/type";
import { tags } from "../../data/tags/tags";
import { TagContentWrapper } from "../../components/TagContentWrapper";
import { getPostsByTags } from "../../libs/posts";

type TagPageProps = {
  tag: Tag;
  blogs: Blog[];
};

const TagPage: NextPage<TagPageProps> = ({ tag, blogs }) => {
  return <TagContentWrapper tag={tag} blogs={blogs} />;
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
