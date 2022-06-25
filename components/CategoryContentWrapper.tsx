import { Blog } from '../types';
import { CategoryList } from './CategoryList';
import { BlogListWrapper } from './BlogListWrapper';
import { Category } from '../data/categories/type'

type CategoryContentWrapperProps = {
  category: Category
  blogs: Blog[]
}

export const CategoryContentWrapper = (props: CategoryContentWrapperProps): JSX.Element => {
  const { category, blogs } = props;
  return (
    <div className='mx-auto w-11/12 md:w-8/12'>
      {/* カテゴリーリスト */}
      <CategoryList/>

      {/* カテゴリータイトル */}
      <div className='mt-10 text-2xl font-bold text-myTextColor'>
        {category}
      </div>

      {/* divider */}
      <div className="border-t-2 border-myBgColorHover my-5"></div>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs}/>
    </div>
  )
}