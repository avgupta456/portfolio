import React from 'react';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
