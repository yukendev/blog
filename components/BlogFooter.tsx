import { ITag } from "../types"
import { Tag } from './Tag';

import Twitter from '../images/Twitter.svg'
import Clip from '../images/Clip.svg'

type BlogFooterProps = {
  tags: ITag[]
}

export const BlogFooter = (props: BlogFooterProps): JSX.Element => {
  const { tags } = props;

  return (
    <div>

      {/* タグ */}
      <div className="flex my-5">
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
        <div className="mr-3">
          <Twitter widht={40} height={40} />
        </div>

        {/* コピー */}
        <div className="ml-3">
          <Clip widht={40} height={40} />
        </div>

      </div>

    </div>
  )
}