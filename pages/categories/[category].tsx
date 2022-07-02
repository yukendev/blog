import { NextPage } from "next";
import { Blog } from "../../types";
import { CategoryContentWrapper } from "../../components/CategoryContentWrapper";
import { Category } from "../../data/categories/type";
import { categories } from "../../data/categories/categories";
import { getPostsByCategory } from "../../libs/posts";

type CategoryProps = {
  category: Category;
  blogs: Blog[];
};

const CategoryPage: NextPage<CategoryProps> = ({ category, blogs }) => {
  return <CategoryContentWrapper category={category} blogs={blogs} />;
};

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: {
      category,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const category = params.category;
  const blogs = await getPostsByCategory(category);
  return {
    props: {
      category,
      blogs,
    },
  };
};

export default CategoryPage;
