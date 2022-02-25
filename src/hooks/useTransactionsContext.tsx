import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

type TransactionsContextProps = {
  transactions: TransactionProps[]
  createTransaction: (transactions: TransactionInputProps) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
)

type TransactionProps = {
  id: number
  title: string
  category: string
  type: string
  amount: number
  createdAt: string
}

type TransactionInputProps = Pick<
  TransactionProps,
  'title' | 'category' | 'type' | 'amount'
> // get some parameters from an type

type TransactionsProviderProps = {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<TransactionProps[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransaction(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const transaction = response.data.transactions

    setTransaction([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
