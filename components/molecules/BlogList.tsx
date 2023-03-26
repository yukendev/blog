import { Blog } from '../../types';
import { TagCard } from '../atoms/TagCard';
import Link from 'next/link';
import { useCallback } from 'react';

type BlogListProps = {
  blog: Blog;
};

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { slug, date, title, tags } = blog;


  const formatDate = useCallback((date: string) => {
    return date.replaceAll('-', '/');
  }, [])

  return (
    <article className='drop-shadow-md rounded-lg bg-myBlogListBgColor p-8 my-2'>
      {/* 日付 */}
      <time className='text-sm'>{formatDate(date)}</time>

      {/* ブログタイトル */}
      
      <div className='font-bold my-1 text-xl text-myTextColor deco-underline-text cursor-pointer'>
        <Link href={`/blogs/${slug}`}>
          {title}
        </Link>
      </div>
      

      {/* タグ */}
      <ul className='flex flex-wrap mt-5'>
        {tags.map((tag, index) => {
          return <TagCard key={index} tag={tag} />;
        })}
      </ul>
    </article>
  );
};
