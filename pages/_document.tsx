import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ja'>
      <Head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css'
          rel='stylesheet'
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
