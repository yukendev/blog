import Link from 'next/link';
import styles from './Category.module.scss';

type Props = {
  image: JSX.Element;
  title: string;
  href: string;
};

export const Category = (props: Props): JSX.Element => (
  <Link href={props.href}>
    <a>
      <div className={styles['category-wrapper']}>
        <span>{props.image}</span>
        <p>{props.title}</p>
      </div>
    </a>
  </Link>
);
