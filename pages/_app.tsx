import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
          },
        }}
      />
    </>
  );
};
export default MyApp;
