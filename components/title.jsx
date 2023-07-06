import React from 'react';
import Head from 'next/head'

export default function Title({ children, description }) {
  return (<>
    <Head>
        <title>{children}</title>
        <link rel="shortcut icon" href="dp.jpg" type="image/x-icon" />
        <meta name="title" content={children} />
        <meta name="description" content={description} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://razik.my.id/" />
        <meta property="og:title" content={children} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://razik.my.id/" />
        <meta property="twitter:title" content={children} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="dp.jpg" />
      </Head>
  </>)  
}
