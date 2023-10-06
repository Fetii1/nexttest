import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import { Component, use } from 'react'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'
  const router = useRouter()
  if (router.asPath == '/#about') {
    router.asPath = 'About'
  } else if (router.asPath == '/#menu') {
    router.asPath = 'Menu'
  } else if (router.asPath == '/#contact') {
    router.asPath = 'Contact'
  } else {
    router.asPath = 'Home'
  }
  return (
    <>
      <Head>
        <title>{title ? `${title} - ${router.asPath}` : 'Next Starter'}</title>

        {/* Favicons */}
        <link rel="icon" href="/favicons/fav-32.ico" sizes="32x32" />
        <link rel="icon" href="/favicons/fav-57.ico" sizes="57x57" />
        <link rel="icon" href="/favicons/fav-76.ico" sizes="76x76" />
        <link rel="icon" href="/favicons/fav-96.ico" sizes="96x96" />
        <link rel="icon" href="/favicons/fav-128.ico" sizes="128x128" />
        <link rel="icon" href="/favicons/fav-192.ico" sizes="192x192" />
        <link rel="icon" href="/favicons/fav-228.ico" sizes="228x228" />
      </Head>
      <div
        className={`font-lora antialiased bg-slate-800 flex flex-col ${dev ? 'debug-screens' : ''}`}
      >
        {/* Navigation here */}
        <Navigation />

        {children}

        {/* Footer here */}
        <Footer />
      </div>
    </>
  )
}
