import { CategoryPage } from '@components/pages/Category';
import { type Category, categories } from '@constants/categories';

export default function Page({ params }: { params: { category: Category } }) {
  return <CategoryPage category={params.category} />;
}

export const generateStaticParams = async () => {
  return categories.map((category) => ({
    category,
  }));
};
