import { Tag } from '../../constants/tags';
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
      <li className={`my-1 mr-1 rounded-lg px-3 bg-myTagColor cursor-pointer ${opacityStyle}`}>
        <a className={`font-bold ${textStyle}`}>
          {tag}
        </a>
      </li>
    </Link>
  );
};
