import firebase from '@/firebase/index';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import '@/styles/index.scss';
import SEO from '../../next-seo.config';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [authStateChecked, setAuthStateChecked] = useState(false);

  useEffect(() => {
    firebase.auth().getRedirectResult().then(() => {
      setAuthStateChecked(true);
    });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
      </Head>
      <DefaultSeo {...SEO} />
      {authStateChecked && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
