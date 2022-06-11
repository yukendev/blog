
type TagProps = {
  tagName: string
}

export const Tag = (props: TagProps): JSX.Element => {
  const { tagName } = props;
  return (
    <div className="bg-white text-white">
      {tagName}
    </div>
  )
}