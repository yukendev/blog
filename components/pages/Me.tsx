import Image from 'next/image';
import Twitter from '../../images/Twitter.svg';
import GitHub from '../../images/GitHub.svg';

export const MePage = () => {
  return (
    <div className='flex flex-col content-between'>
      {/* 写真 */}
      <div className='flex justify-center my-5'>
        <Image
          className='rounded-3xl'
          src='/about.png'
          width={200}
          height={200}
          alt='My avatar'
        />
      </div>

      {/* 名前 */}
      <div className='flex flex-col content-center my-2'>
        <p className='text-xl font-medium text-center font-medium'>てずか</p>
        <p className='text-center font-medium'>@tezuka_0906_wtf</p>
      </div>

      {/* 各種アカウント */}
      <nav className='flex justify-center my-2'>
        {/* twitter */}
        <a className='mr-2' href='https://twitter.com/tezuka_0906_wtf'>
          <Twitter widht={40} height={40} />
        </a>

        {/* GitHub */}
        <a className='ml-2' href='https://github.com/yukendev'>
          <GitHub widht={40} height={40} />
        </a>
      </nav>

      {/* About Me */}
      <h2 className='mx-auto text-xl mt-10 font-medium'>About Me</h2>
      <div className='p-3 mx-auto max-w-xl'>
        <p className='font-medium leading-relaxed'>
          <a href='https://growi.org/' style={{ textDecoration: 'underline' }}>
            『GROWI』
          </a>
          というOSSのwikiシステムの開発に携わっています。
          勉強時間的にはフロントの方が多いですが、バックエンド、インフラにも興味あります。
          体を構成している全要素は『Vtuber』『銭湯』『テニス』です。それ以外の要素は体にありません。
        </p>
      </div>

      {/* About Blog */}
      <h2 className='mx-auto text-xl mt-10 font-medium'>About Blog</h2>
      <div className='p-3 mx-auto max-w-xl'>
        <p className='font-medium'>
          以前まで別のブログ
          を運営してましたが、Next.jsを勉強したくなったので新しく
          Next.jsとVercelで立ち上げました。ブログ名の由来は知りません。
          これからブラッシュアップしていきたい所存であります。
        </p>
      </div>
    </div>
  );
};
