import { Header } from '../organisms/Header';
import { Footer } from './Footer';
import Head from 'next/head';
import GoogleAnalytics from '../GoogleAnalytics';

// Layout for all page
export const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <GoogleAnalytics />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='flex-grow bg-myBgColor justify-center'>{children}</div>
        <Footer />
      </div>
    </>
  );
};
