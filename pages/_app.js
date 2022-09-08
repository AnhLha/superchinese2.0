import React from 'react'
import '../assets/globals.css'
import {Header, Footer, IconFixed} from "../components/index"
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import rootSaga from '../sagas/index'
import { createWrapper } from 'next-redux-wrapper';
import '../services/i18n/i18n.service'

export const makeStore = (context)=>{
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = createWrapper(makeStore, { debug: true })

function MyApp({ Component, pageProps }) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <IconFixed/>
      <Component {...pageProps} />
      <Footer/>
    </React.Suspense>
    
  )
}

export default wrapper.withRedux(MyApp);
