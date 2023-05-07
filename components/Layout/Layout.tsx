import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import Script from 'next/script';
import { existsGaId, GA_ID } from '../../libs/gtag';

const GoogleAnalytics = (): JSX.Element => {
  if (!existsGaId) {
    return <></>
  }
  return (
    <>
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='ga' defer strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());    
            gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
      
};

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
