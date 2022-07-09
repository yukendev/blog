import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";
import Head from "next/head";
import GoogleAnalytics from "../GoogleAnalytics";

// Layout for all page
export const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
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
