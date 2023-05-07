import { Blog } from '../../types';
import { TagCard } from '@components/atoms/TagCard';
import Link from 'next/link';
import { formatDate } from 'util/date-formatter';

type Props = {
  blog: Blog;
};

export const BlogList = (props: Props): JSX.Element => {
  const { blog } = props;
  const { slug, date, title, tags } = blog;

  return (
    <article className='drop-shadow-md rounded-lg bg-myBlogListBgColor p-8 my-2'>
      {/* 日付 */}
      <time dateTime={date} className='text-sm'>
        {formatDate(date)}
      </time>

      {/* ブログタイトル */}
      <h3 className='font-bold my-1 text-xl text-myTextColor deco-underline-text cursor-pointer'>
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h3>

      {/* タグ */}
      <ul className='flex flex-wrap mt-5'>
        {tags.map((tag, index) => {
          return <TagCard key={index} tag={tag} />;
        })}
      </ul>
    </article>
  );
};
