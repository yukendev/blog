import { getPostsBySlug } from 'src/libs/posts';
import { Blog } from '../../types';
import { formatDate } from '../../utils/date-formatter';
import { BlogFooter } from '../organisms/BlogFooter';
import styles from './Blog.module.scss';

type Props = {
  slug: string;
};

export const BlogPage = async (props: Props) => {
  const blog = await getPostsBySlug(props.slug);
  if (!blog) return <></>;
  const { title, date, body, tags } = blog;
  const formatedCreatedAt = formatDate(date);

  return (
    <main className={styles['blog-page-wrapper']}>
      <div className={styles['blog-page-contents']}>
        {/* タイトル */}
        <h1 className={styles['blog-page-contents-title']}>{title}</h1>

        {/* 公開日 */}
        <div className={styles['blog-page-contents-date']}>
          <p>公開日:&nbsp;</p>
          <time dateTime={date}>{`${formatedCreatedAt}`}</time>
        </div>

        {/* 本文 */}
        <div
          className={`markdown-body-style-from-zenn ${styles['markdown-body-style-custom']}`}
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {/* footer */}
        <footer className={styles['blog-page-contents-footer']}>
          <BlogFooter tags={tags ?? []} blog={blog} />
        </footer>
      </div>
    </main>
  );
};
