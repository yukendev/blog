import { Blog } from '../../types';
import { CategoryList } from '../organisms/CategoryList';
import { BlogListWrapper } from '../organisms/BlogListWrapper';
import { Category } from '@constants/categories';
import { CategoryDescription } from '@components/atoms/CategoryDescription';
import { categoryDescription } from '@constants/categoryDescription';

type CategoryPageProps = {
  category: Category;
  blogs: Blog[];
};

export const CategoryPage = (props: CategoryPageProps): JSX.Element => {
  const { category, blogs } = props;
  return (
    <div className='mx-auto w-11/12 max-w-5xl'>
      {/* カテゴリーリスト */}
      <CategoryList />

      {/* カテゴリータイトル */}
      <h1 className='mt-10 text-2xl font-bold text-myTextColor'>{category}</h1>

      {/* カテゴリー概要 */}
      <CategoryDescription
        categoryDescription={categoryDescription[category]}
      />

      {/* divider */}
      <hr className='border-t-2 border-myBgColorDark my-5' />

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
