'use client';

import React, { useEffect } from 'react';
import HomePage from '@/modules/home/HomePage';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Trading Tool</title>
        <meta
          name='description'
          content='Welcome to Trading Tool, your trusted copy trading tool.'
        />
      </Head>
      <HomePage />
    </>
  );
}
