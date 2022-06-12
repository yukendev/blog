import { NextPage } from "next";
import { client } from "../../libs/client";
import { IBlog, ITag } from "../../types"
import { TagContentWrapper } from '../../components/TagContentWrapper';

type TagPageProps = {
  tag: ITag
  blogs: IBlog[]
}

const TagPage: NextPage<TagPageProps> = ({ tag, blogs }) => {
  return <TagContentWrapper tag={tag} blogs={blogs}/>
}

export const getStaticPaths = async () => {

  const data = await client.get({ endpoint: "tags" });

  const paths = data.contents.map((content) => `/tags/${content.name}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const tagData = await client.get({ endpoint: "tags", queries: { filters: `name[equals]${name}`}});
  const tag = tagData.contents[0]
  const id = tag.id
  const blogData = await client.get({ endpoint: "blogs", queries: { filters: `tags[contains]${id}`}});
  const blogs = blogData.contents
  return {
    props: {
      tag,
      blogs
    },
  };
};

export default TagPage