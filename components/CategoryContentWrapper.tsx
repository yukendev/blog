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
    <div className='mx-auto w-11/12 md:w-8/12'>
      {/* カテゴリーリスト */}
      <CategoryList/>

      {/* カテゴリータイトル */}
      <div className='mt-10 text-2xl font-bold text-myTextColor'>
        {category.name}
      </div>

      {/* divider */}
      <div className="border-t-2 border-myBgColorHover my-5"></div>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs}/>
    </div>
  )
}