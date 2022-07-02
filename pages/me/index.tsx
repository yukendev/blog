import Image from "next/image";
import Twitter from "../../images/Twitter.svg";
import GitHub from "../../images/GitHub.svg";

const AboutPage = (): JSX.Element => {
  return (
    <div>
      <div className="flex flex-col content-between">
        {/* 写真 */}
        <div className="flex justify-center my-5">
          <Image
            className="rounded-3xl"
            src="/icon.jpg"
            width={150}
            height={150}
            alt="My avatar"
          />
        </div>

        {/* 名前 */}
        <div className="flex flex-col content-center my-2">
          <div className="text-lg font-medium text-center">てずか</div>
          <div className="text-center">@tezuka_0906_wtf</div>
        </div>

        {/* 各種アカウント */}
        <div className="flex justify-center my-2">
          {/* twitter */}
          <a className="mr-2" href="https://twitter.com/tezuka_0906_wtf">
            <Twitter widht={40} height={40} />
          </a>

          {/* GitHub */}
          <a className="ml-2" href="https://github.com/yukendev">
            <GitHub widht={40} height={40} />
          </a>
        </div>

        {/* 一言 */}
        <div className="p-3">
          <div className="bg-myBlogContentBgColor rounded-3xl p-4 md:p-8 mx-auto max-w-xl">
            <p className="font-medium">
              現在は大阪大学を休学して、東京の会社でエンジニアインターンをしています。
              少し前までSwiftでiOSの開発をしていましたが、現在はNextjs, React,
              TypeScriptを勉強しながら「GROWI」というOSSのwikiシステムの開発に携わっています。
              このブログはNext.jsの勉強がてら、vercel+microCMSでデプロイした自作ブログ。
              体を構成している物質はVtuberと銭湯とテニスです。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
