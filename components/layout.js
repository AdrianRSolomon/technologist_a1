import Navbar from './navbar'
import Head from 'next/head'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
          <title>A1 Technologist</title>
          <meta name="title" content="A1 Technologist"/>
          <meta name="description" content="Service at your door, doesn't cost more. Personal in-home services at 1/2 the price and without the wait."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://a1technologist.vercel.app/"/>
          <meta property="og:title" content="A1 Technologist"/>
          <meta property="og:description" content="Service at your door, doesn't cost more. Personal in-home services at 1/2 the price and without the wait."/>
          <meta property="og:image" content=""/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Navbar />
      <main>{children}
      </main>
   
      <Footer/>
    </>
  )
}