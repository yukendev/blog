import { IBlog } from "../types"

type BlogListProps = {
  blog: IBlog
}

export const BlogList = (props: BlogListProps): JSX.Element => {
  return <div>ブログ！</div>
}
