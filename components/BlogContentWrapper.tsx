import { IBlog } from "../types"
import { formatDate } from '../util/date-formatter';

type BlogContentWrapperProps = {
  blog: IBlog
}

export const BlogContentWrapper = (props: BlogContentWrapperProps): JSX.Element => {
  const { blog } = props;
  const { title, createdAt, body } = blog;
  const formatedCreatedAt = formatDate(createdAt);

  return (
    <div className="bg-myBlogContentBgColor text-center rounded-lg">
      <div className="p-10">
        {/* タイトル */}
        <h1 className="text-3xl font-bold p-5">{title}</h1>

        {/* 公開日 */}
        <div className="flex justify-end my-5">
          <p className="mr-10">{`公開日: ${formatedCreatedAt}`}</p>
        </div>

        {/* 本文 */}
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  )
}