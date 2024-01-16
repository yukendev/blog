import Link from 'next/link';
import TitleImg from '../../images/Title.svg';
import styles from './HeaderTitle.module.scss';

export const HeaderTitle = (): JSX.Element => (
  <Link className={styles['headet-title']} href='/'>
    <TitleImg width={200} />
  </Link>
);
