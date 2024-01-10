import Link from 'next/link';
import TitleImg from '../../images/Title.svg';
import styles from './HeaderTitle.module.scss';

export const HeaderTitle = (): JSX.Element => (
  <Link href='/'>
    <a className={styles['headet-title']}>
      <TitleImg width={200} />
    </a>
  </Link>
);
