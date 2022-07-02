import { Tag } from "../data/tags/type";
import Link from "next/link";

type TagProps = {
  tag: Tag;
};

export const TagCard = (props: TagProps): JSX.Element => {
  const { tag } = props;
  return (
    <Link href={`/tags/${tag}`}>
      <div className="px-3 bg-myTagColor cursor-pointer text-white rounded-lg mr-1 text-sm my-1">
        {tag}
      </div>
    </Link>
  );
};
