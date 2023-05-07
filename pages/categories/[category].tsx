import type { ReactElement } from 'react';
import { Blog } from '../../types';
import { CategoryContentWrapper } from '../../components/organisms/CategoryContentWrapper';
import { Category } from '../../constants/categories';
import { categories } from '../../constants/categories';
import { getPostsByCategory } from '../../libs/posts';
import type { NextPageWithLayout } from '../_app';
import { Layout } from '../../components/Layout/Layout';

type CategoryProps = {
  category: Category;
  blogs: Blog[];
};

const CategoryPage: NextPageWithLayout<CategoryProps> = ({
  category,
  blogs,
}) => {
  return <CategoryContentWrapper category={category} blogs={blogs} />;
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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
