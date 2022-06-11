import { IBlog } from "../types"
import { Tag } from './Tag';

type BlogListProps = {
  blog: IBlog
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  var y = date.getFullYear();
  var m = ('00' + (date.getMonth()+1)).slice(-2);
  var d = ('00' + date.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}

export const BlogList = (props: BlogListProps): JSX.Element => {
  const { blog } = props;
  const { createdAt, title, tags} = blog;
  const formattedCreatedAt = formatDate(createdAt);
  return(
    <div className="rounded-lg bg-white p-3 my-2">
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
  )
}
