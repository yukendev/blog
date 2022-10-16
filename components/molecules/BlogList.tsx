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
    <Link href={`/blogs/${slug}`}>
      <div className='drop-shadow-md deco-underline-element rounded-lg bg-myBlogListBgColor p-8 my-2 cursor-pointer hover:bg-myBlogContentBgColorHover'>
        {/* 日付 */}
        <div className='text-sm'>{formatDate(date)}</div>

        {/* ブログタイトル */}
        <div className='font-bold my-1 text-xl text-myTextColor deco-underline-text'>{title}</div>

        {/* タグ */}
        <div className='flex flex-wrap my-2'>
          {tags.map((tag, index) => {
            return <TagCard key={index} tag={tag} />;
          })}
        </div>
      </div>
    </Link>
  );
};
