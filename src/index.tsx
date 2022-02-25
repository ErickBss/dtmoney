import React from 'react'
import ReactDOM from 'react-dom'

import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website',
          type: 'deposit',
          category: 'Work',
          amount: 7000,
          createdAt: new Date('2022-02-12 12:00:00'),
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Payment',
          amount: 1000,
          createdAt: new Date('2022-02-19 12:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api' // all the ways with route api, the mirage will intercept

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
