import { Blog } from '../../types';
import { formatDate } from '../../util/date-formatter';
import { BlogFooter } from '../organisms/BlogFooter';
import styles from './Blog.module.scss';
import 'zenn-content-css';

type Props = {
  blog: Blog;
};

export const BlogPage = (props: Props): JSX.Element => {
  const { blog } = props;
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
        <div className='znc' dangerouslySetInnerHTML={{ __html: body }} />

        {/* devider */}
        <hr className={styles['blog-page-contents-devider']}></hr>

        {/* footer */}
        <footer className={styles['blog-page-contents-footer']}>
          <BlogFooter tags={tags} blog={blog} />
        </footer>
      </div>
    </main>
  );
};
