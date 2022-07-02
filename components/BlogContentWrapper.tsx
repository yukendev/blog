import { Blog } from "../types"
import { formatDate } from '../util/date-formatter';
import { BlogFooter } from './BlogFooter';
import Head from 'next/head'


type BlogContentWrapperProps = {
  blog: Blog
}

export const BlogContentWrapper = (props: BlogContentWrapperProps): JSX.Element => {
  const { blog } = props;
  const { title, date, body, tags } = blog;
  const formatedCreatedAt = formatDate(date);

  return (
    <div className="markdown-body bg-myBlogContentBgColor rounded-lg mx-auto w-11/12 md:w-8/12 max-w-5xl">

      <Head>
        <title>{blog.title}</title>
      </Head>

      <div className="p-3 md:p-10">
        {/* タイトル */}
        <div className="text-center">
          <h1 className="text-3xl font-bold p-2 mx-auto">{title}</h1>
        </div>

        {/* 公開日 */}
        <div className="flex justify-end my-5">
          <p className="mr-1 md:mr-10">{`公開日: ${formatedCreatedAt}`}</p>
        </div>

        {/* 本文 */}
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>

        {/* devider */}
        <div className="border-t-2 my-10"></div>

        {/* footer */}
        <div className="mb-10">
          <BlogFooter tags={tags} blog={blog}/>
        </div>

      </div>
    </div>
  )
}