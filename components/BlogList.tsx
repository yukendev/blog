import { IBlog } from "../types"
import { Tag } from './Tag';
import Link from 'next/link'
import { formatDate } from '../util/date-formatter';

type BlogListProps = {
  blog: IBlog
}

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { id, createdAt, title, tags} = blog;
  const formattedCreatedAt = formatDate(createdAt);
  return(
    <Link href={`/blog/${id}`}>
      <div className="rounded-lg bg-myBlogListBgColor p-3 my-2 cursor-pointer hover:bg-myBlogContentBgColorHover">
        {/* 日付 */}
        <div className="text-sm">
          {formattedCreatedAt}
        </div>

        {/* ブログタイトル */}
        <div className="font-bold my-1 text-lg">
          {title}
        </div>

        {/* タグ */}
        <div className="flex my-2">
          {
            tags.map((tag) => {
              return <Tag tag={tag}/>
            })
          }
        </div>
      </div>
    </Link>
  )
}
