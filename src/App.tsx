import React, { useState } from 'react'

import Modal from 'react-modal'

import { GlobalStyles } from './styles/global'
import { Header } from './components/header/index'
import { Dashboard } from './components/dashboard'
import { NewTransactionModal } from './components/newTransactionModal'

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyles />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </>
  )
}

export { App }
