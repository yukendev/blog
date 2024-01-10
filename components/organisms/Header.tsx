import { HeaderTitle } from '@components/atoms/HeaderTitle';
import { HeaderContents } from '@components/molecules/HeaderContents';
import { HeaderContentsForMobile } from '@components/molecules/HeaderContentsForMobile';
import { HeaderExpandButton } from '@components/atoms/HeaderExpandButton';
import { useCallback, useState } from 'react';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  const [isHeaderExpand, setIsHeaderExpand] = useState(false);

  const onClickExpandButtonHandler = useCallback(() => {
    setIsHeaderExpand(!isHeaderExpand);
  }, [isHeaderExpand]);

  return (
    <header className={styles['header']}>
      <div className={styles['header-contents-wrapper']}>
        {/* ブログタイトル */}
        <HeaderTitle />

        {/* 各種リンク 画面が大きい時(レスポンシブ) */}
        <div className={styles['header-contents']}>
          <HeaderContents />
        </div>

        {/* レスポンシブ対応ボタン */}
        <div className={styles['header-contents-mobile']}>
          <HeaderExpandButton
            onClickHandler={onClickExpandButtonHandler}
            isHeaderExpand={isHeaderExpand}
          />
        </div>
      </div>

      {/* 各種リンク 画面が小さい時(レスポンシブ) */}
      <div className={styles['header-contents-mobile']}>
        {isHeaderExpand && <HeaderContentsForMobile />}
      </div>
    </header>
  );
};
