import { BlogListWrapper } from '@components/organisms/BlogListWrapper';
import { CategoryList } from '@components/organisms/CategoryList';
import { Blog } from 'types';
import styles from './TopPage.module.scss';

type TopPageProps = {
  blogs: Blog[];
};

export const TopPage = ({ blogs }: TopPageProps) => {
  return (
    <div className={styles['top-page-wrapper']}>
      <CategoryList />
      <h1>記事一覧</h1>
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
