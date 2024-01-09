import type { ReactElement } from 'react';
import { Layout } from '@components/Layout/Layout';
import { MePage } from '@components/pages/Me';

const AboutPage = (): JSX.Element => {
  return <MePage />;
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default AboutPage;
