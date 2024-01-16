import Link from 'next/link';
import styles from './HeaderContentButton.module.scss';

type HeaderContentButtonProps = {
  title: string;
  href: string;
};

// サイト内で画面遷移するボタン
export const HeaderContentButton = (
  props: HeaderContentButtonProps,
): JSX.Element => (
  <Link href={props.href}>
    <a className={styles['header-content-button']}>{props.title}</a>
  </Link>
);
