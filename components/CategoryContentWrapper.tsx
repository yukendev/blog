import { Blog } from '../types';
import { CategoryList } from './organisms/CategoryList';
import { BlogListWrapper } from './organisms/BlogListWrapper';
import { Category } from '../data/categories/type';
import { CategoryDescription } from './CategoryDescription';

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
      <div className='mt-10 text-2xl font-bold text-myTextColor'>
        {category}
      </div>

      {/* カテゴリー概要 */}
      <CategoryDescription category={category} />

      {/* divider */}
      <div className='border-t-2 border-myBgColorHover my-5'></div>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
