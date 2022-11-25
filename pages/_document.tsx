/* eslint-disable react/no-danger */
/* eslint-disable @next/next/next-script-for-ga */

import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          defer
          data-website-id="d3d784be-d94e-4a11-b832-8ee6b6f80cfd"
          src="https://umami-nine-zeta.vercel.app/umami.js"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-145490100-2"
        />
        <script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-145490100-2', { page_path: window.location.pathname });
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
