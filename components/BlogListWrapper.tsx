import { Blog } from "../types";
import { BlogList } from "./BlogList";

type BlogListWrapperProps = {
  blogs: Blog[];
};

export const BlogListWrapper = (props: BlogListWrapperProps): JSX.Element => {
  const { blogs } = props;

  return (
    <div className="mt-5 grid md:grid-cols-2 gap-4">
      {blogs.map((blog) => {
        return <BlogList key={blog.slug} blog={blog} />;
      })}
    </div>
  );
};
