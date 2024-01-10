import Image from 'next/image';
import Twitter from '../../images/Twitter.svg';
import GitHub from '../../images/GitHub.svg';

import style from './Me.module.scss';

export const MePage = () => {
  return (
    <div className={style['me-page-wrapper']}>
      {/* 写真 */}
      <div className={style['image']}>
        <Image src='/about.png' width={200} height={200} alt='My avatar' />
      </div>

      {/* 名前 */}
      <div className={style['name']}>
        <p>てずか</p>
        <p>@tezuka_0906_wtf</p>
      </div>

      {/* 各種アカウント */}
      <nav className={style['sns-links']}>
        {/* twitter */}
        <a href='https://twitter.com/tezuka_0906_wtf'>
          <Twitter widht={40} height={40} />
        </a>

        {/* GitHub */}
        <a href='https://github.com/yukendev'>
          <GitHub widht={40} height={40} />
        </a>
      </nav>

      {/* About Me */}
      <h2 className={style['about-title']}>About Me</h2>
      <div className={style['about']}>
        <p>
          <a href='https://growi.org/'>『GROWI』</a>
          というOSSのwikiシステムの開発に携わっています。
          勉強時間的にはフロントの方が多いですが、バックエンド、インフラにも興味あります。
          体を構成している全要素は『Vtuber』『銭湯』『テニス』です。それ以外の要素は体にありません。
        </p>
      </div>

      {/* About Blog */}
      <h2 className={style['about-title']}>About Blog</h2>
      <div className={style['about']}>
        <p>
          以前まで別のブログ
          を運営してましたが、Next.jsを勉強したくなったので新しく
          Next.jsとVercelで立ち上げました。ブログ名の由来は知りません。
          これからブラッシュアップしていきたい所存であります。
        </p>
      </div>
    </div>
  );
};
