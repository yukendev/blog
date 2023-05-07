import { Blog } from '../../types';
import { formatDate } from '../../util/date-formatter';
import { BlogFooter } from './BlogFooter';

type BlogContentWrapperProps = {
  blog: Blog;
};

export const BlogContentWrapper = (
  props: BlogContentWrapperProps,
): JSX.Element => {
  const { blog } = props;
  const { title, date, body, tags } = blog;
  const formatedCreatedAt = formatDate(date);

  return (
    <main className='markdown-body rounded-lg mx-auto p-2 w-11/12 md:w-8/12 max-w-3xl'>
      <div className='p-1 md:p-5'>
        {/* タイトル */}
        <h1 className=' text-center text-3xl font-bold p-2 mx-auto'>{title}</h1>

        {/* 公開日 */}
        <div className='flex justify-end my-5'>
          <p>公開日:&nbsp;</p>
          <time
            dateTime={date}
            className='mr-1 md:mr-10'
          >{`${formatedCreatedAt}`}</time>
        </div>

        {/* 本文 */}
        <div className='prose max-w-none'>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>

        {/* devider */}
        <hr className='border-t-2 my-10'></hr>

        {/* footer */}
        <footer className='mb-10'>
          <BlogFooter tags={tags} blog={blog} />
        </footer>
      </div>
    </main>
  );
};
