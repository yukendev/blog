import Link from 'next/link';

type HeaderContentWrapperProps = {
  title: string;
  href: string;
};

// サイト内で画面遷移するボタン
const HeaderContentWrapper = (
  props: HeaderContentWrapperProps,
): JSX.Element => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className='px-2 py-3 mx-3 text-myTextColor cursor-pointer deco-underline-text'>
        {title}
      </a>
    </Link>
  );
};

// 外部サイトを開くボタン
const HeaderContentWrapperForExternal = (
  props: HeaderContentWrapperProps,
): JSX.Element => {
  const { title, href } = props;
  return (
    <div className='px-2 py-3 mx-3 text-myTextColor cursor-pointer deco-underline-text'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    </div>
  );
};

export const HeaderContentsForMobile = (): JSX.Element => {
  return (
    <div className='bg-myBgColorDark mt-3 rounded-xl p-3'>
      {/* Home */}
      <HeaderContentWrapper title='Home' href='/' />

      {/* About */}
      <HeaderContentWrapper title='About' href='/me' />

      {/* Twitter */}
      <HeaderContentWrapperForExternal
        title='Twitter'
        href='https://twitter.com/tezuka_0906_wtf'
      />

      {/* Github */}
      <HeaderContentWrapperForExternal
        title='Github'
        href='https://github.com/yukendev'
      />
    </div>
  );
};
