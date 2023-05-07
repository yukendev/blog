import { Tag } from '@constants/tags';
import Link from 'next/link';

type Props = {
  tag: Tag;
};

export const TagCard = (props: Props): JSX.Element => (
  <Link href={`/tags/${props.tag}`}>
    <li className='my-1 mr-1 rounded-lg px-3 bg-myTagColor cursor-pointer opacity-70 hover:opacity-50'>
      <a className='font-bold text-myTextColor text-sm'>{props.tag}</a>
    </li>
  </Link>
);
