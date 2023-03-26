import { Tag } from '../../data/tags/type';
import Link from 'next/link';

type TagProps = {
  tag: Tag;
};

const textStyle = 'text-myTextColor text-sm'
const opacityStyle = 'opacity-70 hover:opacity-50'

export const TagCard = (props: TagProps): JSX.Element => {
  const { tag } = props;
  return (
    <Link href={`/tags/${tag}`}>
      <a className={`px-3 bg-myTagColor cursor-pointer font-bold rounded-lg mr-1  my-1 ${textStyle} ${opacityStyle}`}>
        {tag}
      </a>
    </Link>
  );
};
