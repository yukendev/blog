import { IBlog } from '../types'
import { BlogList } from './BlogList'

type BlogListWrapperProps = {
  blogs: IBlog[]
}

export const BlogListWrapper = (props: BlogListWrapperProps): JSX.Element => {

  const { blogs } = props;

  return (
    <div>
      {
        blogs.map(blog => {
          return <BlogList blog={blog} />
        })
      }
    </div>
  )
}