import { HeaderContentButton } from '@components/atoms/HeaderContentButton';
import { HeaderContentButtonForExternal } from '@components/atoms/HeaderContentButtonForExternal';

export const HeaderContentsForMobile = (): JSX.Element => (
  <nav className='bg-myBgColorDark mt-3 rounded-xl p-3'>
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
