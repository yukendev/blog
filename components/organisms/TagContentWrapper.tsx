import { Blog } from '../../types';
import { BlogListWrapper } from './BlogListWrapper';
import { Tag } from '../../data/tags/type';

type TagContentWrapperProps = {
  tag: Tag;
  blogs: Blog[];
};

export const TagContentWrapper = (
  props: TagContentWrapperProps,
): JSX.Element => {
  const { tag, blogs } = props;
  return (
    <div className='mx-auto w-11/12 md:w-8/12 max-w-5xl'>
      {/* タグタイトル */}
      <h1 className='mt-10 text-2xl font-bold text-myTextColor'>{tag}</h1>

      {/* divider */}
      <hr className='border-t-2 border-myBgColorDark my-5'></hr>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs} />
    </div>
  );
};
