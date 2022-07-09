import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";
import Head from "next/head";
import GoogleAnalytics from "../GoogleAnalytics";

// Layout for all page
export const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <GoogleAnalytics />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-myBgColor justify-center">{children}</div>
        <Footer />
      </div>
    </>
  );
};
