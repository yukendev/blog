import { Blog } from '../types';
import { TagCard } from './TagCard';
import Link from 'next/link';

type BlogListProps = {
  blog: Blog;
};

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { slug, date, title, tags } = blog;
  return (
    <Link href={`/blogs/${slug}`}>
      <div className='rounded-lg bg-myBlogListBgColor p-8 my-2 cursor-pointer hover:bg-myBlogContentBgColorHover'>
        {/* 日付 */}
        <div className='text-sm'>{date}</div>

        {/* ブログタイトル */}
        <div className='font-bold my-1 text-xl'>{title}</div>

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
