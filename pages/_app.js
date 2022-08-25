import React from 'react'
import '../assets/globals.css'
import Header from "../components/header.component"
import Footer from "../components/footer.component"


function MyApp({ Component, pageProps }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </React.Suspense>
    
  )
}

export default MyApp
