import { HeaderTitle } from '@components/atoms/HeaderTitle';
import { HeaderContents } from '@components/molecules/HeaderContents';
import { HeaderContentsForMobile } from '@components/molecules/HeaderContentsForMobile';
import { HeaderExpandButton } from '@components/atoms/HeaderExpandButton';
import { useCallback, useState } from 'react';

export const Header = (): JSX.Element => {
  const [isHeaderExpand, setIsHeaderExpand] = useState(false);

  const onClickExpandButtonHandler = useCallback(() => {
    setIsHeaderExpand(!isHeaderExpand);
  }, [isHeaderExpand]);

  return (
    <header className='w-full bg-myBgColor p-5 md:p-10'>
      <div className='w-full flex justify-between'>
        {/* ブログタイトル */}
        <HeaderTitle />

        {/* 各種リンク 画面が大きい時(レスポンシブ) */}
        <div className='hidden md:block'>
          <HeaderContents />
        </div>

        {/* レスポンシブ対応ボタン */}
        <div className='md:hidden'>
          <HeaderExpandButton
            onClickHandler={onClickExpandButtonHandler}
            isHeaderExpand={isHeaderExpand}
          />
        </div>
      </div>

      {/* 各種リンク 画面が小さい時(レスポンシブ) */}
      <div className='md:hidden'>
        {isHeaderExpand && <HeaderContentsForMobile />}
      </div>
    </header>
  );
};
