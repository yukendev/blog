import { HeaderContentButton } from '@components/atoms/HeaderContentButton';
import { HeaderContentButtonForExternal } from '@components/atoms/HeaderContentButtonForExternal';
import styles from './HeaderContentsForMobile.module.scss';

export const HeaderContentsForMobile = (): JSX.Element => (
  <nav className={styles['header-contents-for-mobile']}>
    {/* Home */}
    <HeaderContentButton title='Home' href='/' />

    {/* About */}
    <HeaderContentButton title='About' href='/me' />

    {/* Twitter */}
    <HeaderContentButtonForExternal
      title='Twitter'
      href='https://twitter.com/tezuka_0906_wtf'
    />

    {/* Github */}
    <HeaderContentButtonForExternal
      title='Github'
      href='https://github.com/yukendev'
    />
  </nav>
);
