import React, { useEffect } from 'react'
import '../assets/globals.scss'
import { Header, Footer, IconFixed } from "../components/index"
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'
import { createWrapper } from 'next-redux-wrapper';
import '../services/i18n/i18n.service'
import Head from 'next/head'
import { useDetectMobile } from "../customeHook";

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = createWrapper(makeStore, { debug: true })

function MyApp({ Component, pageProps }) {

  useDetectMobile()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Super,chinese, ứng, dụng, hoc, tiếng, trung, chính, hãng, số 1, việt, nam" />
        <meta name="description" content="Super chinese ứng dụng học tiếng Trung chính hãng số 1 Việt Nam, ứng dụng học tiếng Trung giá rẻ tốt nhất 2022, ứng dụng học tiếng trung HSK mới nhất " />
        <meta name="generator" content="Cty TNHH Konec" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta property="og:title" content="Tiếng Trung siêu việt" key="title" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
      </Head>

      <Header />
      {/* <IconFixed /> */}
      <div className='app-wrapper'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>

  )
}

export default wrapper.withRedux(MyApp);
