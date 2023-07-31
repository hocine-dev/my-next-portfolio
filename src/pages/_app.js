import React from 'react';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    
    <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
  
  <main  className={`${montserrat.variable} font-sans bg-light w-full min-h-screen dark:bg-dark overflow-y-hidden`} >
  <Navbar/>
  <AnimatePresence mode='wait'>
  <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
  <Footer/>
</main>
    
    </>
  )
  

}
