import { Blog } from '../../types';
import { TagCard } from '@components/atoms/TagCard';
import Link from 'next/link';
import { formatDate } from 'util/date-formatter';
import style from './BlogList.module.scss';

type BlogListProps = {
  blog: Blog;
};

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { slug, date, title, tags } = blog;

  return (
    <article className={style['blog-list-wrapper']}>
      {/* 日付 */}
      <time dateTime={date}>{formatDate(date)}</time>

      {/* ブログタイトル */}
      <h3>
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h3>

      {/* タグ */}
      <ul>
        {tags.map((tag, index) => {
          return <TagCard key={index} tag={tag} />;
        })}
      </ul>
    </article>
  );
};
