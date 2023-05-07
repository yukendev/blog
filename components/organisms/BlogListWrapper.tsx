import { Blog } from '../../types';
import { BlogList } from '@components/molecules/BlogList';

type Props = {
  blogs: Blog[];
};

export const BlogListWrapper = (props: Props): JSX.Element => {
  const { blogs } = props;

  return (
    <div className='mt-5 grid md:grid-cols-2 gap-4'>
      {blogs.map((blog) => {
        return <BlogList key={blog.slug} blog={blog} />;
      })}
    </div>
  );
};
