import { Blog } from "../types";
import { BlogList } from "./BlogList";

type BlogListWrapperProps = {
  blogs: Blog[];
};

export const BlogListWrapper = (props: BlogListWrapperProps): JSX.Element => {
  const { blogs } = props;

  return (
    <div className="mt-5">
      {blogs.map((blog) => {
        return <BlogList blog={blog} />;
      })}
    </div>
  );
};
