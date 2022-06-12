import { IBlog, ICategory } from '../types';
import { CategoryList } from './CategoryList';
import { BlogListWrapper } from './BlogListWrapper';

type CategoryContentWrapperProps = {
  category: ICategory
  blogs: IBlog[]
}

export const CategoryContentWrapper = (props: CategoryContentWrapperProps): JSX.Element => {
  const { category, blogs } = props;
  return (
    <div>
      {/* カテゴリーリスト */}
      <CategoryList/>

      {/* カテゴリータイトル */}
      <div>
        {category.name}
      </div>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs}/>
    </div>
  )
}