import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tezuka_0906_wtf" />
        <meta
          name="twitter:image"
          content="https://www.yukendev.com/ogp2.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ぼうず屋本舗" />
        <meta property="og:image" content="https://www.yukendev.com/ogp2.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
