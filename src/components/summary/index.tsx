import { Container } from './style'

import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outComeImg} alt="outcome" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>
      <div className="highlight_background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong> R$ 500,00</strong>
      </div>
    </Container>
  )
}
