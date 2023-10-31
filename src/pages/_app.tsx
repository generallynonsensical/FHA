// src/pages/_app.tsx
import { AppProps } from 'next/app';
import './globals.css';  // Adjust the path based on your project structure

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
