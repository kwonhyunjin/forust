import { DefaultSeo } from 'next-seo';
import React from 'react';
import '../styles/index.scss';
import SEO from '../../next-seo.config';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
