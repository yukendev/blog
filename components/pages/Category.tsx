import { Blog } from '../../types';
import { CategoryList } from '../organisms/CategoryList';
import { BlogListWrapper } from '../organisms/BlogListWrapper';
import { Category } from '@constants/categories';
import { CategoryDescription } from '@components/atoms/CategoryDescription';
import { categoryDescription } from '@constants/categoryDescription';
import styles from './Category.module.scss';

type CategoryPageProps = {
  category: Category;
  blogs: Blog[];
};

export const CategoryPage = (props: CategoryPageProps): JSX.Element => {
  const { category, blogs } = props;
  return (
    <div className={styles['category-page-wrapper']}>
      {/* カテゴリーリスト */}
      <CategoryList />

      {/* カテゴリータイトル */}
      <h1>{category}</h1>

      {/* カテゴリー概要 */}
      <CategoryDescription
        categoryDescription={categoryDescription[category]}
      />

      {/* divider */}
      <hr />

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
