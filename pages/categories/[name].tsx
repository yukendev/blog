import { NextPage } from "next";
import { client } from "../../libs/client";
import { IBlog, ICategory } from "../../types"
import { CategoryContentWrapper } from '../../components/CategoryContentWrapper';

type CategoryProps = {
  category: ICategory
  blogs: IBlog[]
}

const Category: NextPage<CategoryProps> = ({ category, blogs }) => {
  return <CategoryContentWrapper category={category} blogs={blogs}/>;
}

export const getStaticPaths = async () => {

  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/categories/${content.name}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const categoryData = await client.get({ endpoint: "categories", queries: { filters: `name[equals]${name}`}});
  const category = categoryData.contents[0]
  const id = category.id
  const blogData = await client.get({ endpoint: "blogs", queries: { filters: `category[equals]${id}`}});
  const blogs = blogData.contents
  return {
    props: {
      category,
      blogs
    },
  };
};

export default Category