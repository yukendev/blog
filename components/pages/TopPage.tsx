import { BlogListWrapper } from '@components/organisms/BlogListWrapper';
import { CategoryList } from '@components/organisms/CategoryList';
import styles from './TopPage.module.scss';
import { getSortedPostsData } from 'libs/posts';

export const TopPage = async () => {
  const blogs = await getSortedPostsData();

  return (
    <div className={styles['top-page-wrapper']}>
      <CategoryList />
      <h1>記事一覧</h1>
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
