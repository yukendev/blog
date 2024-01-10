import { Tag } from '@constants/tags';
import Link from 'next/link';
import styles from './TagCard.module.scss';

type TagCardProps = {
  tag: Tag;
};

export const TagCard = (props: TagCardProps): JSX.Element => (
  <Link href={`/tags/${props.tag}`}>
    <li className={styles['tag-card']}>
      <a>{props.tag}</a>
    </li>
  </Link>
);
