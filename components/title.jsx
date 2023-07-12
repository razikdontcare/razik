import React from 'react';
import Head from 'next/head'

export default function Title({ children, description }) {
  return (<>
    <Head>
        <title>{children}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="title" content={children} />
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://razik.my.id/" />
        <meta property="og:title" content={children} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/dp.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://razik.my.id/" />
        <meta property="twitter:title" content={children} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/dp.jpg" />
      </Head>
  </>)  
}
