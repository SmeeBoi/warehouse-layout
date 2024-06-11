import React from 'react'; // Add this line
import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
