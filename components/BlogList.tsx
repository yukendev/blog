import { IBlog } from "../types"
import { Tag } from './Tag';

type BlogListProps = {
  blog: IBlog
}

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { createdAt, title, tags} = blog;
  return(
    <div>
      {/* 日付 */}
      <div>{createdAt}</div>

      {/* ブログタイトル */}
      <div>{title}</div>

      {/* タグ */}
      <div>
        {
          tags.map((tag) => {
            return <Tag tagName={tag.name}/>
          })
        }
      </div>
    </div>
  )
}
