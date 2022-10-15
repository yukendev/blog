import { HeaderTitle } from '../atoms/HeaderTitle';
import { HeaderContents } from '../molecules/HeaderContents';
import { HeaderContentsForMobile } from '../molecules/HeaderContentsForMobile';
import { HeaderExpandButton } from '../atoms/HeaderExpandButton';
import { useState } from 'react';

export const Header = (): JSX.Element => {
  const [isLinkButtonsHidden, setIsLinkButtonsHidden] = useState(true);

  const hideLinkButtons = (isHidden: boolean) => {
    setIsLinkButtonsHidden(!isHidden);
  };

  return (
    <nav className='w-full bg-myBgColor p-5 md:p-10'>
      <div className='w-full flex justify-between'>
        {/* ブログタイトル */}
        <HeaderTitle />

        {/* 各種リンク 画面が大きい時(レスポンシブ) */}
        <div className='hidden md:block'>
          <HeaderContents />
        </div>

        {/* レスポンシブ対応ボタン */}
        <div className='md:hidden'>
          <HeaderExpandButton hideLinkButtons={hideLinkButtons} />
        </div>
      </div>

      {/* 各種リンク 画面が小さい時(レスポンシブ) */}
      <div className='md:hidden'>
          {!isLinkButtonsHidden && <HeaderContentsForMobile />}
        </div>
    </nav>
  );
};
