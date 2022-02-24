import React, { useState } from 'react'

import Modal from 'react-modal'

import { GlobalStyles } from './styles/global'
import { Header } from './components/header/index'
import { Dashboard } from './components/dashboard'

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Register transaction</h1>
      </Modal>

      <Dashboard />
    </>
  )
}

export { App }
