import { ITag } from "../types"

type TagProps = {
  tag: ITag
}

export const Tag = (props: TagProps): JSX.Element => {
  const { tag } = props;
  return (
    <div className="px-3 bg-myTagColor text-white rounded-lg mr-1 text-sm">
      {tag.name}
    </div>
  )
}