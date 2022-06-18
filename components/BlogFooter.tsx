import { IBlog, ITag } from "../types"
import { Tag } from './Tag';

import Twitter from '../images/Twitter.svg'
import Clip from '../images/Clip.svg'

type BlogFooterProps = {
  tags: ITag[]
  blog: IBlog
}

export const BlogFooter = (props: BlogFooterProps): JSX.Element => {
  const { tags, blog } = props;

  const getURL = (blogId: string): string => {
    return `https://www.yukendev.com/blog/${blogId}aaa`
  }

  const copyButtonHandler = () => {
    try {
      navigator.clipboard.writeText(location.href)
    }
    catch {
      console.log('An Error was occured with copy')
    }
  }

  return (
    <div>

      {/* タグ */}
      <div className="flex flex-wrap my-5">
        {
          tags.map((tag) => {
            return <Tag tag={tag}/>
          })
        }
      </div>

      {/* シェアボタン */}
      <div className="my-10">シェアをしていただけると僕が大変喜びます。</div>

      <div className="flex justify-center">
        {/* twitter */}
        <a className="mr-3" href='//twitter.com/share' data-text={blog.title} data-url={getURL(blog.id)} data-lang='ja'>
          <Twitter widht={40} height={40} />
        </a>

        {/* コピー */}
        <button className="ml-3" onClick={copyButtonHandler}>
          <Clip widht={40} height={40} />
        </button>

      </div>

    </div>
  )
}