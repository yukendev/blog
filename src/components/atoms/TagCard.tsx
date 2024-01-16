import { Tag } from '@constants/tags';
import Link from 'next/link';
import styles from './TagCard.module.scss';

type TagCardProps = {
  tag: Tag;
};

export const TagCard = (props: TagCardProps): JSX.Element => (
  <li className={styles['tag-card']}>
    <Link href={`/tags/${props.tag}`}>{props.tag}</Link>
  </li>
);
