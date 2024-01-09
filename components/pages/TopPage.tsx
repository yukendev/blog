import { BlogListWrapper } from '@components/organisms/BlogListWrapper';
import { CategoryList } from '@components/organisms/CategoryList';
import { Blog } from 'types';

type TopPageProps = {
  blogs: Blog[];
};

export const TopPage = ({ blogs }: TopPageProps) => {
  return (
    <div className='mx-auto w-11/12 max-w-5xl'>
      <CategoryList />
      <h1 className='text-xl text-myTextColor font-bold my-10'>記事一覧</h1>
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
