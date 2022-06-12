import { ITag } from "../types"
import Link from 'next/link'

type TagProps = {
  tag: ITag
}

export const Tag = (props: TagProps): JSX.Element => {
  const { tag } = props;
  return (
    <Link href={`/tags/${tag.name}`}>
      <div className="px-3 bg-myTagColor text-white rounded-lg mr-1 text-sm">
        {tag.name}
      </div>
    </Link>
  )
}