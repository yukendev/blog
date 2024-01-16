import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ja'>
      <Head>
        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css'
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
