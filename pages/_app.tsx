import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/component/index.scss";
import "tailwindcss/tailwind.css";
import usePageView from "../hooks/usePageView";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp;
