import { ITag } from "../types"

type TagProps = {
  tag: ITag
}

export const Tag = (props: TagProps): JSX.Element => {
  const { tag } = props;
  return (
    <div className="px-2 bg-tagBgColor text-white rounded-lg mr-1">
      {tag.name}
    </div>
  )
}