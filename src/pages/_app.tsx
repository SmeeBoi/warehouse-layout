import '../styles/globals.css'; // Importing global styles
import '../styles/tailwind.css'; // Importing Tailwind CSS
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
