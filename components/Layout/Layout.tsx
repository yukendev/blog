import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";
import Head from "next/head";
import GoogleAnalytics from "../GoogleAnalytics";

// Layout for all page
export const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:type" content="website" />
        {/* common settings for OGP */}
        <meta property="og:site_name" content="てずかのブログ" />
        <meta property="og:image" content="https://www.yukendev.com/ogp2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tezuka_0906_wtf" />
        <meta name="twitter:image" content="https://www.yukendev.com/ogp2.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
      </Head>
      <GoogleAnalytics />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-myBgColor justify-center">{children}</div>
        <Footer />
      </div>
    </>
  );
};
