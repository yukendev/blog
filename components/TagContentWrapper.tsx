import { IBlog, ITag } from '../types';
import { BlogListWrapper } from './BlogListWrapper';

type TagContentWrapperProps = {
  tag: ITag
  blogs: IBlog[]
}

export const TagContentWrapper = (props: TagContentWrapperProps): JSX.Element => {
  const { tag, blogs } = props;
  return (
    <div>
      {/* タグタイトル */}
      <div className='mt-10 text-2xl font-bold text-myTextColor'>
        {tag.name}
      </div>

      {/* divider */}
      <div className="border-t-2 border-myBgColorHover my-5"></div>

      {/* ブログリスト */}
      <BlogListWrapper blogs={blogs}/>
    </div>
  )
}