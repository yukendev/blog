import { IBlog, ITag } from "../types"
import { Tag } from './Tag';

import Twitter from '../images/Twitter.svg'
import Clip from '../images/Clip.svg'

import {
  TwitterShareButton,
} from 'react-share';

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
        <TwitterShareButton className="mr-3" url={getURL(blog.id)} title={blog.title}>
          <Twitter widht={40} height={40} />
        </TwitterShareButton>

        {/* コピー */}
        <button className="ml-3" onClick={copyButtonHandler}>
          <Clip widht={40} height={40} />
        </button>

      </div>

    </div>
  )
}