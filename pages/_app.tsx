import '../styles/globals.scss';
import '../styles/toc.scss';
import '@styles/markdown/index.scss';
import usePageView from '../hooks/usePageView';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { metaDataForBlog } from '@constants/meta';
import 'destyle.css';

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  usePageView();
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        defaultTitle={metaDataForBlog.title}
        description={metaDataForBlog.description}
        openGraph={{
          type: 'website',
          title: metaDataForBlog.title,
          description: metaDataForBlog.description,
          site_name: metaDataForBlog.title,
          url: 'https://www.yukendev.com/',
          images: [
            {
              url: 'https://www.yukendev.com//ogp.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: metaDataForBlog.twitterUserName,
          site: metaDataForBlog.twitterUserName,
          cardType: 'summary_large_image',
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
