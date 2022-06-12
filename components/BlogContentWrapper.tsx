import { IBlog } from "../types"
import { formatDate } from '../util/date-formatter';
import { BlogFooter } from './BlogFooter';

type BlogContentWrapperProps = {
  blog: IBlog
}

export const BlogContentWrapper = (props: BlogContentWrapperProps): JSX.Element => {
  const { blog } = props;
  const { title, createdAt, body, tags } = blog;
  const formatedCreatedAt = formatDate(createdAt);

  return (
    <div className="bg-myBlogContentBgColor rounded-lg">
      <div className="py-10 px-32">
        {/* タイトル */}
        <div className="text-center">
          <h1 className="text-3xl font-bold p-5 mx-auto">{title}</h1>
        </div>

        {/* 公開日 */}
        <div className="flex justify-end my-5">
          <p className="mr-10">{`公開日: ${formatedCreatedAt}`}</p>
        </div>

        {/* 本文 */}
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>

        {/* devider */}
        <div className="border-t-2 my-10"></div>

        {/* footer */}
        <div className="mb-10">
          <BlogFooter tags={tags}/>
        </div>

      </div>
    </div>
  )
}