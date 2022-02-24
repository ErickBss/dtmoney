import React from 'react'

import { GlobalStyles } from './styles/global'
import { Header } from './components/header/index'
import { Dashboard } from './components/dashboard'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  )
}

export { App }
