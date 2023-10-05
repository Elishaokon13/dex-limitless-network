/* eslint-disable import/no-default-export */
import type { AppProps } from 'next/app';
import Head from 'next/head'; // Import the Head component
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add SEO elements here */}
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DEX | LimitlessNetwork</title>
        <meta name="description" content="The official DEX for Limitless Network" /> {/* Set your page description here */}
        {/* Add more SEO-related meta tags and links here */}
      </Head>
      {/* Render the component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
