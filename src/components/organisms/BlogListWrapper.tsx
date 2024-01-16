import { Blog } from '../../types';
import { BlogList } from '@components/molecules/BlogList';
import styles from './BlogListWrapper.module.scss';

type Props = {
  blogs: Blog[];
};

export const BlogListWrapper = (props: Props): JSX.Element => {
  const { blogs } = props;

  return (
    <div className={styles['blog-list-wrapper']}>
      {blogs.map((blog) => {
        return <BlogList key={blog.slug} blog={blog} />;
      })}
    </div>
  );
};
