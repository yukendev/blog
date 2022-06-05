import { IBlog } from "../types"

type BlogListProps = {
  blog: IBlog
}

export const BlogList: React.FC<BlogListProps> = () => {
  return <div>ブログ！</div>
}
