import { Blog } from '../../types';
import { CategoryList } from './CategoryList';
import { BlogListWrapper } from './BlogListWrapper';
import { Category } from '@constants/categories';
import { CategoryDescription } from '@components/atoms/CategoryDescription';
import { categoryDescription } from '@constants/categoryDescription';

type CategoryContentWrapperProps = {
  category: Category;
  blogs: Blog[];
};

export const CategoryContentWrapper = (
  props: CategoryContentWrapperProps,
): JSX.Element => {
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
