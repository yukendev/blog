import { Metadata } from 'next/types';
import { metaDataForBlog } from '@constants/meta';
import 'destyle.css';
import '@styles/globals.scss';
import '@styles/toc.scss';
import '@styles/markdown/index.scss';
import { Header } from '@components/organisms/Header';
import { Footer } from '@components/organisms/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  title: metaDataForBlog.title,
  description: metaDataForBlog.description,
  openGraph: {
    type: 'website',
    title: metaDataForBlog.title,
    description: metaDataForBlog.description,
    siteName: metaDataForBlog.title,
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
  },
  twitter: {
    card: 'summary_large_image',
    site: metaDataForBlog.twitterUserName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
